/* FALTARÍAN GAME, FNAC, PCCOMPONENTES, CARREFOUR Y ECI.
   EN EL CASO DE ECI, AMAZON Y NACONGAMING.COM, NO SE GESTIONA
   RETAIL, NO DEBERÍA ABRIR EL MODAL DIRECTAMENTE. QUE TE DEJE
   PASAR Y FIN.
*/

export const stores = [
  {
    name: "Amazon",
    url: "https://www.amazon.es",
    mail: "clientes@amazon.es",
    sat: false,
  },
  {
    name: "MediaMarkt",
    retails: [
      {
        name: "MediaMarkt Madrid",
        sat: true,
        address: "Calle de Alcalá, 42",
        hours: "9:00 - 21:00",
        phone: "+34 913 456 789",
      },
      {
        name: "MediaMarkt Barcelona",
        sat: true,
        address: "Carrer de Pelai, 54",
        hours: "10:00 - 20:00",
        phone: "+34 934 567 890",
      },
      {
        name: "MediaMarkt Valencia",
        sat: true,
        address: "Avenida del Cid, 23",
        hours: "9:30 - 19:30",
        phone: "+34 963 456 789",
      },
    ],
  },
  {
    name: "Carrefour",
    retails: [
      {
        name: "Carrefour Madrid",
        sat: true,
        address: "Calle de Serrano, 45",
        hours: "9:00 - 21:00",
        phone: "+34 917 654 321",
      },
      {
        name: "Carrefour Barcelona",
        sat: true,
        address: "Carrer de Sants, 78",
        hours: "10:00 - 20:00",
        phone: "+34 933 123 456",
      },
      {
        name: "Carrefour Valencia",
        sat: true,
        address: "Carrer de Colón, 12",
        hours: "9:30 - 19:30",
        phone: "+34 961 789 012",
      },
    ],
  },
  {
    name: "GAME",
    retails: [
      {
        name: "GAME Madrid",
        sat: true,
        address: "Calle de Gran Vía, 50",
        hours: "10:00 - 22:00",
        phone: "+34 910 123 456",
      },
      {
        name: "GAME Barcelona",
        sat: true,
        address: "Carrer de Pau Claris, 99",
        hours: "10:00 - 20:00",
        phone: "+34 933 654 321",
      },
      {
        name: "GAME Valencia",
        sat: true,
        address: "Avenida del Canyamelar, 8",
        hours: "10:00 - 21:00",
        phone: "+34 963 789 654",
      },
    ],
  },
  {
    name: "FNAC",
    retails: [
      {
        name: "FNAC Madrid",
        sat: true,
        address: "Calle de Preciados, 28",
        hours: "9:30 - 21:00",
        phone: "+34 914 567 890",
      },
      {
        name: "FNAC Barcelona",
        sat: true,
        address: "Carrer de la Rambla, 105",
        hours: "10:00 - 20:00",
        phone: "+34 933 123 789",
      },
      {
        name: "FNAC Valencia",
        sat: true,
        address: "Carrer de Xàtiva, 23",
        hours: "9:30 - 19:30",
        phone: "+34 963 567 890",
      },
    ],
  },
  {
    name: "PC Componentes",
    retails: [
      {
        name: "PC Componentes Madrid",
        sat: true,
        address: "Calle de Orense, 24",
        hours: "9:00 - 21:00",
        phone: "+34 917 654 987",
      },
      {
        name: "PC Componentes Barcelona",
        sat: true,
        address: "Carrer de Pau Claris, 75",
        hours: "10:00 - 20:00",
        phone: "+34 933 321 654",
      },
      {
        name: "PC Componentes Valencia",
        sat: true,
        address: "Avenida de Aragón, 55",
        hours: "10:00 - 19:00",
        phone: "+34 963 234 567",
      },
    ],
  },
  {
    name: "El Corte Inglés",
    url: "https://elcorteingles.es",
    mail: "clientes@elcorteingles.es",
    sat: false,
  },
  {
    name: "Nacon Gaming",
    url: "https://nacongaming.com",
    mail: "support@nacongaming.com",
    sat: false,
  },
];
