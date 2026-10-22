#!/usr/bin/env bash
# Build every top-level folder of the repo into _site/<folder>/ so each one
# is served as its own static site at  https://<user>.github.io/<repo>/<folder>/
#
#  • Folder with package.json  -> npm ci && npm run build, output copied from
#                                 dist/ (or build/, out/). BASE_PATH is exported
#                                 so the bundler knows its sub-path.
#  • Folder with index.html    -> copied as-is (plain HTML/CSS/JS site).
#  • Anything else             -> skipped.
#
# A landing page listing all sites is generated at _site/index.html.
# Run locally:  REPO_NAME=static-sites ./scripts/build-all.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/_site"
REPO_NAME="${REPO_NAME:-${GITHUB_REPOSITORY#*/}}"
REPO_NAME="${REPO_NAME:-static-sites}"
SKIP_DIRS=" scripts node_modules _site "

rm -rf "$OUT"
mkdir -p "$OUT"
touch "$OUT/.nojekyll"
built=()

for dir in "$ROOT"/*/; do
  name="$(basename "$dir")"
  [[ "$SKIP_DIRS" == *" $name "* ]] && continue

  if [[ -f "$dir/package.json" ]]; then
    echo "::group::Building $name (npm)"
    export BASE_PATH="/$REPO_NAME/$name/"
    (
      cd "$dir"
      if [[ -f package-lock.json ]]; then npm ci; else npm install; fi
      npm run build
    )
    src=""
    for candidate in dist build out; do
      [[ -f "$dir/$candidate/index.html" ]] && { src="$dir/$candidate"; break; }
    done
    if [[ -z "$src" ]]; then
      echo "::error::$name built but no dist/, build/ or out/ with index.html was found"
      exit 1
    fi
    cp -r "$src" "$OUT/$name"
    echo "::endgroup::"
    built+=("$name")
  elif [[ -f "$dir/index.html" ]]; then
    echo "Copying $name (static)"
    mkdir -p "$OUT/$name"
    cp -r "$dir". "$OUT/$name/"
    built+=("$name")
  else
    echo "Skipping $name (no package.json or index.html)"
  fi
done

if [[ ${#built[@]} -eq 0 ]]; then
  echo "::error::No sites found to build"
  exit 1
fi

{
  cat <<'HTML'
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Static sites</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 40rem; margin: 3rem auto; padding: 0 1rem; line-height: 1.5; }
    a { color: #2563eb; }
  </style>
</head>
<body>
  <h1>Static sites</h1>
  <ul>
HTML
  for name in "${built[@]}"; do
    echo "    <li><a href=\"./$name/\">$name</a></li>"
  done
  cat <<'HTML'
  </ul>
</body>
</html>
HTML
} > "$OUT/index.html"

echo "Built: ${built[*]}"
