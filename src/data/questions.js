export const questions = [
  {
    id: 1,
    type: "question",
    options: [
      { text: "REALIZAR UNA CONSULTA", nextId: 2 },
      { text: "GARANTÍA DE PRODUCTO ", nextId: 3 },
    ],
  },
  {
    id: 2,
    category: "general",
    type: "question",
    message: "Realización de Consulta",
    question:
      "¿Es una consulta general o es una consulta sobre alguno de nuestros productos?",
    options: [
      {
        text: "General",
        nextId: 4,
        icon: "/naconsupport/message.svg",
      },
      {
        text: "Producto",
        nextId: 5,
        icon: "/naconsupport/gamepad.svg",
      },
    ],
  },
  {
    id: 3,
    category: "warranty",
    type: "form",
    freeWriting: false,
    question: "Por favor, introduzca sus datos para poder contactar con usted:",
    options: { nextId: 6, icon: "/naconsupport/continue.svg" },
  },
  {
    id: 4,
    category: "general",
    type: "form",
    message: "Consulta General",
    question: "¿Cuál es su consulta?",
    freeWriting: true,
    options: { nextId: 7, icon: "/naconsupport/continue.svg" },
  },
  {
    id: 5,
    category: "general",
    type: "select_product",
    question: "¿Sobre qué producto quiere hacer su consulta?",
    options: { nextId: 17, icon: "/naconsupport/continue.svg" },
  },
  {
    id: 6,
    category: "warranty",
    type: "select_product",
    question: "¿Sobre qué producto quiere gestionar su garantía?",
    options: { nextId: 8, icon: "/naconsupport/continue.svg" },
  },
  {
    id: 7,
    category: "general",
    type: "end",
    message:
      "Gracias por su consulta. Nos pondremos en contacto con usted lo antes posible.",
    storeData: false,
  },
  {
    id: 8,
    category: "warranty",
    type: "select_store",
    message:
      "Gracias. Este es su producto sobre el que vamos a gestionar la garantía.",
    question: "¿En qué establecimiento adquirió este producto?",
    options: {
      noSatNextId: 9,
      satNextId: 10,
      icon: "/naconsupport/continue.svg",
    },
  },
  {
    id: 9,
    category: "warranty",
    type: "end",
    message:
      "La gestión de garantías de productos NACON en Amazon, Nacongaming.com o El Corte Inglés se debe realizar directamente con la tienda dónde adquirió su producto. A continuación le facilitamos datos de contacto:",
    storeData: true,
  },
  {
    id: 10,
    category: "warranty",
    type: "select_date",
    message:
      "Gracias por identificar su producto y la tienda dónde lo ha adquirido.",
    question: "¿Cuál fue la fecha en la que compró el producto?",
    options: {
      invalidDateNextId: 11,
      validDateNextId: 12,
      icon: "/naconsupport/continue.svg",
    },
  },
  {
    id: 11,
    category: "warranty",
    type: "end_products",
    message:
      "¡Lo sentimos! No es posible reclamar la garantía de este artículo.",
    question:
      "Te ofrecemos las siguientes opciones para comprar un nuevo producto:",
  },
  {
    id: 12,
    category: "warranty",
    type: "file",
    subtype: "ticket",
    message:
      "Por favor, adjunte una imagen del ticket de su compra e inserte el número del mismo.",
    options: [
      {
        text: "No tengo ticket",
        nextId: 11,
        icon: "/naconsupport/error.svg",
      },
      {
        text: "Continuar",
        nextId: 13,
        hasCondition: true,
        icon: "/naconsupport/continue.svg",
      },
    ],
  },
  {
    id: 13,
    category: "warranty",
    type: "picture_files",
    message: "Por favor, adjunte como máximo 5 fotografías del producto.",
    options: [
      {
        text: "No tengo fotos",
        nextId: 11,
        icon: "/naconsupport/error.svg",
      },
      {
        text: "Continuar",
        nextId: 14,
        hasCondition: true,
        icon: "/naconsupport/continue.svg",
      },
    ],
  },
  {
    id: 14,
    category: "warranty",
    type: "file",
    subtype: "video",
    message:
      "Por favor, adjunte un vídeo de producto funcionando incorrectamente. Es importante que podamos ver claramente el fallo que presenta.",
    options: [
      {
        text: "No tengo vídeo",
        nextId: 11,
        icon: "/naconsupport/error.svg",
      },
      {
        text: "Continuar",
        nextId: 15,
        hasCondition: true,
        icon: "/naconsupport/continue.svg",
      },
    ],
  },
  {
    id: 15,
    category: "warranty",
    type: "warranty_form",
    question: "Necesitamos que nos indique las respuestas a estas preguntas:",
    options: {
      invalidNextId: 11,
      validNextId: 16,
      icon: "/naconsupport/continue.svg",
    },
  },
  {
    id: 16,
    category: "warranty",
    type: "data_confirmation",
    message:
      "Necesitamos que nos confirmes los datos que nos has indicado anteriormente. Es importante que sean correctos para poder gestionar tu garantía.",
    options: { nextId: 18, icon: "/naconsupport/continue.svg" },
  },

  {
    id: 17,
    category: "general",
    type: "faq",
    question: "Manuales & Enlaces de Interés",
  },
  {
    id: 18,
    category: "warranty",
    type: "end",
    message:
      "¡Gracias por confirmar tus datos! Vamos a verificar todo y pronto tendrás una respuesta de nuestra parte.",
  },
];
