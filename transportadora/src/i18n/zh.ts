import type { Messages } from "./types";

// Simplified Chinese.
export const zh: Messages = {
  meta: {
    title: "Transporte Chaparral：卡萨纳雷省陶拉梅纳的校车、石油人员及航空运输",
    description:
      "从卡萨纳雷省陶拉梅纳出发，提供校车接送和石油行业人员运输，并可按特殊需求安排直升机或小型飞机。",
  },
  nav: {
    label: "主导航",
    servicios: "服务",
    comoTrabajamos: "合作流程",
    contacto: "联系我们",
  },
  idioma: { label: "语言" },
  cta: {
    cotizar: "询价",
    pedirCotizacion: "获取报价",
    verServicios: "查看服务",
    mensajeWhatsapp: "您好，我想咨询交通服务的报价。",
  },
  ubicacion: "哥伦比亚卡萨纳雷省陶拉梅纳",
  hero: {
    titulo: "陆路接送学校与石油企业，必要时空中直达。",
    texto:
      "我们位于哥伦比亚卡萨纳雷省陶拉梅纳，提供校车路线、前往油田的私人人员运输，并可按特殊需求安排直升机或小型飞机，由同一团队统筹全程。",
  },
  ruta: [
    { titulo: "学校", texto: "每日门到门接送路线" },
    { titulo: "油田", texto: "换班及人员运输" },
    { titulo: "公路无法到达之处", texto: "按特殊需求安排直升机或小型飞机" },
  ],
  servicios: {
    titulo: "三项服务，统一协调",
    items: [
      {
        titulo: "校车服务",
        resumen:
          "为学校和幼儿园设计每日路线，与校方共同规划，并向每个家庭提供清晰的信息。",
        puntos: [
          "门到门接送",
          "每条路线配备随车照管员",
          "学校和家长可通过 GPS 实时追踪",
          "司机持有效驾照并接受道路安全培训",
          "中小型客车均按期完成车辆技术检测",
        ],
      },
      {
        titulo: "石油行业人员运输",
        resumen:
          "在卡萨纳雷省及周边地区的城市、基地和作业油田之间提供私人人员运输，按各合同的班次安排。",
        puntos: [
          "根据乘客人数提供四驱皮卡、商务车和大巴",
          "按计划执行换班及轮班运输",
          "遵循客户的出行计划及 HSE 规程",
          "途中卫星监控",
          "全年无休，24 小时服务",
        ],
      },
      {
        titulo: "直升机与小型飞机（按需安排）",
        resumen:
          "如需紧急转运或前往无公路可达的地区，我们与持证航空运营商协调安排航班。",
        puntos: [
          "直升机可直达油田或偏远地区",
          "小型飞机最多可载 3 名乘客，往返于跑道和机场之间",
          "按航段和乘客人数报价",
          "统一安排航班前后的地面交通",
        ],
        nota: "视飞机可用情况及天气条件而定。",
      },
    ],
  },
  pasos: {
    titulo: "合作流程",
    etiqueta: (n) => `第 ${n} 步`,
    items: [
      {
        titulo: "告诉我们您的需求",
        texto: "起点、终点、时间和乘客人数。如为校车路线，请提供地址清单。",
      },
      {
        titulo: "获取方案",
        texto: "我们将发送路线、车型、指派司机及报价。",
      },
      {
        titulo: "开始运营",
        texto: "确认日期，并为日常服务提供专属联系人。",
      },
    ],
  },
  contacto: {
    titulo: "已有路线规划？",
    texto:
      "请告诉我们起点、终点和乘客人数。如需直升机或小型飞机，请注明大致日期。",
    telefono: "电话及 WhatsApp",
    correo: "邮箱",
    oficina: "办公地点",
  },
  pie: { banderaCasanare: "卡萨纳雷省旗" },
};
