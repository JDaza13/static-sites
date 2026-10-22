import type { Messages } from "./types";

// Simplified Chinese.
export const zh: Messages = {
  meta: {
    title: "Promotora Rumba：婚礼、公司派对、锐舞派对等活动策划",
    description:
      "我们策划婚礼、公司派对、锐舞派对、生日会、毕业庆典和十五岁成人礼。告诉我们氛围、地区和人数即可。",
  },
  nav: {
    label: "主导航",
    events: "活动类型",
    howItWorks: "合作流程",
    contact: "联系我们",
  },
  language: { label: "语言" },
  cta: { plan: "策划我的活动", send: "通过 WhatsApp 发送" },
  hero: {
    title: "用一句话告诉我们您的活动。",
    text:
      "我们会在您选择的地区找到合适的场地，并负责其余一切：餐饮、酒水、音乐、布置和人员。",
  },
  request: {
    sentence: "我们想在 {area} 举办{eventType}，氛围{mood}，约 {guests} 人。",
    labels: {
      eventType: "活动类型",
      mood: "氛围",
      area: "地区或城市",
      guests: "人数",
    },
    areaExample: "希亚或波哥大北部",
    areaHint: "只需告诉我们地区，场地由我们来找。",
    areaError: "请填写地区或城市后再发送。",
    guestsError: "请用数字填写人数。",
    date: "大致日期（可选）",
    menuTitle: (type) => `${type.name}通常提供`,
    food: "餐饮",
    drinks: "酒水",
    menuNote: "我们会根据预算、活动时间和宾客的饮食需求调整菜单。",
    messageGreeting: "您好，我想咨询一个活动的报价。",
    messageDate: (date) => `大致日期：${date}`,
    messageMenu: "餐饮和酒水：请按此类活动推荐。",
  },
  eventTypes: {
    company: {
      inSentence: "一场公司派对",
      name: "公司派对",
      description: "年终派对、周年庆、发布会和团建活动，规模不限。",
      food: ["欢迎小食和开胃点心", "美食站或桌餐", "素食及无麸质选择"],
      drinks: ["鸡尾酒、葡萄酒和啤酒吧台", "无酒精饮品和咖啡", "闭幕致辞时的祝酒"],
    },
    wedding: {
      inSentence: "一场婚礼",
      name: "婚礼",
      description: "仪式、宴会和派对，全天由专人统筹。",
      food: ["欢迎酒会及开胃点心", "三道式晚宴或自助餐", "婚礼蛋糕和甜品台", "深夜小食"],
      drinks: ["祝酒用起泡酒", "席间葡萄酒", "开放式酒吧", "无酒精饮品"],
    },
    rave: {
      inSentence: "一场锐舞派对",
      name: "锐舞派对",
      description: "电子音乐派对，音响、灯光、许可和入场安排一应俱全。",
      food: ["餐车和街头小吃", "通宵供应的小食"],
      drinks: ["免费饮用水补给点", "快速吧台：啤酒和简单鸡尾酒", "功能饮料和无酒精饮品"],
    },
    birthday: {
      inSentence: "一场生日派对",
      name: "生日派对",
      description: "从小型晚宴到大型派对都可以。",
      food: ["拼盘或美食站", "定制蛋糕"],
      drinks: ["特调鸡尾酒", "啤酒和无酒精饮品"],
    },
    graduation: {
      inSentence: "一场毕业庆典",
      name: "毕业庆典",
      description: "可为一个家庭或整届毕业生举办。",
      food: ["自助午餐或晚餐", "派对拼盘", "蛋糕或甜点"],
      drinks: ["为毕业生祝酒", "含酒精及无酒精吧台"],
    },
    quinceanera: {
      inSentence: "一场十五岁成人礼",
      name: "十五岁成人礼",
      description: "华尔兹、狂欢时段，以及适合各年龄宾客的菜单。",
      food: ["桌餐", "甜品台和蛋糕", "狂欢时段小食"],
      drinks: ["为未成年宾客准备的无酒精鸡尾酒", "成人吧台", "祝酒"],
    },
  },
  moods: {
    festive: "热闹",
    elegant: "优雅",
    laidBack: "轻松",
    intimate: "私密",
    bohemian: "波西米亚风",
    tropical: "热带风",
    underground: "地下风",
  },
  events: {
    title: "我们策划的活动",
    text: "如果您的活动不在列表中，也欢迎告诉我们。",
  },
  steps: {
    title: "合作流程",
    label: (n) => `第 ${n} 步`,
    items: [
      {
        title: "告诉我们您的想法",
        text: "活动类型、氛围、地区和人数。填好上面那句话就够了。",
      },
      {
        title: "获取方案",
        text: "我们会发送该地区的场地选择，以及菜单、音乐、布置和预算。",
      },
      {
        title: "尽情享受",
        text: "活动当天由我们协调供应商、布置和工作人员。",
      },
    ],
  },
  contact: {
    title: "想直接沟通？",
    text: "通过 WhatsApp 联系我们，我们会提几个问题来完善您的想法。",
    whatsapp: "WhatsApp",
  },
  footer: { tagline: "活动全程策划" },
};
