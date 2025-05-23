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
    message: "Garantía de Producto",
    question: "Por favor, introduzca sus datos para poder contactar con usted:",
    aproxTime:
      "Completar este proceso le llevará aproximadamente diez minutos. Por favor, asegúrese de tener a mano la siguiente documentación: ticket, imágenes del producto y vídeo del producto fallando.",
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
    message: "Consulta General",
    question: "¿Sobre qué producto quiere hacer su consulta?",
    options: { nextId: 17, icon: "/naconsupport/continue.svg" },
  },
  {
    id: 6,
    category: "warranty",
    message: "Garantía de Producto",
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
    message: "Garantía de producto",
    question: "¿En qué establecimiento adquirió este producto?",
    options: {
      satNextId: 10,
      specificStoreNextId: 9,
      icon: "/naconsupport/continue.svg",
    },
  },
  {
    id: 9,
    category: "warranty",
    type: "end_specific_store",
  },
  {
    id: 10,
    category: "warranty",
    type: "select_date",
    message: "Garantía de producto",
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
    type: "file_ticket",
    subtype: "ticket",
    message: "Garantía de producto",
    question:
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
    message: "Garantía de producto",
    question: "Por favor, adjunte como máximo 5 fotografías del producto.",
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
    type: "file_video",
    subtype: "video",
    message: "Garantía de producto",
    question:
      "Por favor, adjunte un vídeo de producto funcionando incorrectamente. Es importante que podamos ver claramente el fallo que presenta, tanto en el dispositivo como en la pantalla (si aplica).",
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
    message: "Garantía de producto",
    question: "Necesitamos que nos indique las respuestas a estas preguntas:",
    options: {
      invalidNextId: 11,
      validNextId: 20,
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
    message: "Consulta General",
    question: "Manuales & Enlaces de Interés",
  },
  {
    id: 18,
    category: "warranty",
    type: "end",
    message:
      "¡Gracias por confirmar tus datos! Vamos a verificar todo y pronto tendrás una respuesta de nuestra parte.",
  },
  {
    id: 20,
    category: "warranty",
    type: "address_form",
    message: "Garantía de producto",
    question: "Por favor, introduce los datos de tu domicilio:",
    options: { nextId: 16, icon: "/naconsupport/continue.svg" },
  },
];
