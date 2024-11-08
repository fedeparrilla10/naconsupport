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
    question:
      "¿Es una consulta general o es una consulta sobre alguno de nuestros productos?",
    options: [
      { text: "Consulta general", nextId: 4 },
      { text: "Consulta sobre un producto", nextId: 5 },
    ],
  },
  {
    id: 3,
    category: "warranty",
    type: "form",
    freeWriting: false,
    question: "Por favor, introduzca sus datos para poder contactar con usted:",
    options: { nextId: 6 },
  },
  {
    id: 4,
    category: "general",
    type: "form",
    question: "¿Cuál es su consulta?",
    freeWriting: true,
    options: { nextId: 7 },
  },
  {
    id: 5,
    category: "general",
    type: "select_product",
    question: "¿Sobre qué producto quiere hacer su consulta?",
  },
  {
    id: 6,
    category: "warranty",
    type: "select_product",
    question: "¿Sobre qué producto quiere gestionar su garantía?",
    options: { nextId: 8 },
  },
  {
    id: 7,
    category: "general",
    type: "end",
    message:
      "Gracias por su consulta. Nos pondremos en contacto con usted lo antes posible.",
  },
  {
    id: 8,
    category: "warranty",
    type: "select_store",
    message:
      "Gracias. Este es su producto sobre el que vamos a gestionar la garantía.",
    question: "¿En qué establecimiento adquirió este producto?",
  },
];
