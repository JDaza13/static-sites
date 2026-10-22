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
    eventos: "活动类型",
    comoFunciona: "合作流程",
    contacto: "联系我们",
  },
  idioma: { label: "语言" },
  cta: { planear: "策划我的活动", enviar: "通过 WhatsApp 发送" },
  hero: {
    titulo: "用一句话告诉我们您的活动。",
    texto:
      "我们会在您选择的地区找到合适的场地，并负责其余一切：餐饮、酒水、音乐、布置和人员。",
  },
  pedido: {
    frase: "我们想在 {zona} 举办{tipo}，氛围{ambiente}，约 {personas} 人。",
    etiquetas: {
      tipo: "活动类型",
      ambiente: "氛围",
      zona: "地区或城市",
      personas: "人数",
    },
    zonaEjemplo: "希亚或波哥大北部",
    zonaAyuda: "只需告诉我们地区，场地由我们来找。",
    zonaError: "请填写地区或城市后再发送。",
    personasError: "请用数字填写人数。",
    fecha: "大致日期（可选）",
    menuTitulo: (tipo) => `${tipo.nombre}通常提供`,
    comida: "餐饮",
    bebida: "酒水",
    menuNota: "我们会根据预算、活动时间和宾客的饮食需求调整菜单。",
    mensajeSaludo: "您好，我想咨询一个活动的报价。",
    mensajeFecha: (fecha) => `大致日期：${fecha}`,
    mensajeMenu: "餐饮和酒水：请按此类活动推荐。",
  },
  tipos: {
    empresa: {
      enFrase: "一场公司派对",
      nombre: "公司派对",
      descripcion: "年终派对、周年庆、发布会和团建活动，规模不限。",
      comida: ["欢迎小食和开胃点心", "美食站或桌餐", "素食及无麸质选择"],
      bebida: ["鸡尾酒、葡萄酒和啤酒吧台", "无酒精饮品和咖啡", "闭幕致辞时的祝酒"],
    },
    boda: {
      enFrase: "一场婚礼",
      nombre: "婚礼",
      descripcion: "仪式、宴会和派对，全天由专人统筹。",
      comida: ["欢迎酒会及开胃点心", "三道式晚宴或自助餐", "婚礼蛋糕和甜品台", "深夜小食"],
      bebida: ["祝酒用起泡酒", "席间葡萄酒", "开放式酒吧", "无酒精饮品"],
    },
    rave: {
      enFrase: "一场锐舞派对",
      nombre: "锐舞派对",
      descripcion: "电子音乐派对，音响、灯光、许可和入场安排一应俱全。",
      comida: ["餐车和街头小吃", "通宵供应的小食"],
      bebida: ["免费饮用水补给点", "快速吧台：啤酒和简单鸡尾酒", "功能饮料和无酒精饮品"],
    },
    cumpleanos: {
      enFrase: "一场生日派对",
      nombre: "生日派对",
      descripcion: "从小型晚宴到大型派对都可以。",
      comida: ["拼盘或美食站", "定制蛋糕"],
      bebida: ["特调鸡尾酒", "啤酒和无酒精饮品"],
    },
    grado: {
      enFrase: "一场毕业庆典",
      nombre: "毕业庆典",
      descripcion: "可为一个家庭或整届毕业生举办。",
      comida: ["自助午餐或晚餐", "派对拼盘", "蛋糕或甜点"],
      bebida: ["为毕业生祝酒", "含酒精及无酒精吧台"],
    },
    quince: {
      enFrase: "一场十五岁成人礼",
      nombre: "十五岁成人礼",
      descripcion: "华尔兹、狂欢时段，以及适合各年龄宾客的菜单。",
      comida: ["桌餐", "甜品台和蛋糕", "狂欢时段小食"],
      bebida: ["为未成年宾客准备的无酒精鸡尾酒", "成人吧台", "祝酒"],
    },
  },
  ambientes: {
    festivo: "热闹",
    elegante: "优雅",
    relajado: "轻松",
    intimo: "私密",
    bohemio: "波西米亚风",
    tropical: "热带风",
    underground: "地下风",
  },
  eventos: {
    titulo: "我们策划的活动",
    texto: "如果您的活动不在列表中，也欢迎告诉我们。",
  },
  pasos: {
    titulo: "合作流程",
    etiqueta: (n) => `第 ${n} 步`,
    items: [
      {
        titulo: "告诉我们您的想法",
        texto: "活动类型、氛围、地区和人数。填好上面那句话就够了。",
      },
      {
        titulo: "获取方案",
        texto: "我们会发送该地区的场地选择，以及菜单、音乐、布置和预算。",
      },
      {
        titulo: "尽情享受",
        texto: "活动当天由我们协调供应商、布置和工作人员。",
      },
    ],
  },
  contacto: {
    titulo: "想直接沟通？",
    texto: "通过 WhatsApp 联系我们，我们会提几个问题来完善您的想法。",
    whatsapp: "WhatsApp",
  },
  pie: { lema: "活动全程策划" },
};
