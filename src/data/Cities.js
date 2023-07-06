const CITIES = [
  {
    name: "Adana",
    zipCode: "01000",
    geocoding: {
      lat: 36.9863599,
      lon: 35.3252861,
    },
  },
  {
    name: "Adıyaman",
    zipCode: "02000",
    geocoding: {
      lat: 37.7602379,
      lon: 38.2772662,
    },
  },
  {
    name: "Afyonkarahisar",
    zipCode: "03000",
    geocoding: {
      lat: 38.7562504,
      lon: 30.5393573,
    },
  },
  {
    name: "Ağrı",
    zipCode: "04000",
    geocoding: {
      lat: 39.719125,
      lon: 43.0504894,
    },
  },
  {
    name: "Aksaray",
    zipCode: "68000",
    geocoding: {
      lat: 38.3705416,
      lon: 34.026907,
    },
  },
  {
    name: "Amasya",
    zipCode: "05000",
    geocoding: {
      lat: 40.6503248,
      lon: 35.8329148,
    },
  },
  {
    name: "Ankara",
    zipCode: "06000",
    geocoding: {
      lat: 39.9207886,
      lon: 32.8540482,
    },
  },
  {
    name: "Antalya",
    zipCode: "07000",
    geocoding: {
      lat: 36.8872942,
      lon: 30.7074549,
    },
  },
  {
    name: "Ardahan",
    zipCode: "75000",
    geocoding: {
      lat: 41.1102966,
      lon: 42.7035585,
    },
  },
  {
    name: "Artvin",
    zipCode: "08000",
    geocoding: {
      lat: 41.1830811,
      lon: 41.8287448,
    },
  },
  {
    name: "Aydın",
    zipCode: "09000",
    geocoding: {
      lat: 37.8483767,
      lon: 27.8435878,
    },
  },
  {
    name: "Balıkesir",
    zipCode: "10000",
    geocoding: {
      lat: 39.6473917,
      lon: 27.8879787,
    },
  },
  {
    name: "Bartın",
    zipCode: "74000",
    geocoding: {
      lat: 41.6338394,
      lon: 32.3384354,
    },
  },
  {
    name: "Batman",
    zipCode: "72000",
    geocoding: {
      lat: 37.8793969,
      lon: 41.1235427,
    },
  },
  {
    name: "Bayburt",
    zipCode: "69000",
    geocoding: {
      lat: 40.25569,
      lon: 40.224099,
    },
  },
  {
    name: "Bilecik",
    zipCode: "11000",
    geocoding: {
      lat: 40.1435101,
      lon: 29.9752911,
    },
  },
  {
    name: "Bingöl",
    zipCode: "12000",
    geocoding: {
      lat: 38.8861265,
      lon: 40.4972333,
    },
  },
  {
    name: "Bitlis",
    zipCode: "13000",
    geocoding: {
      lat: 38.4017779,
      lon: 42.1083064,
    },
  },
  {
    name: "Bolu",
    zipCode: "14000",
    geocoding: {
      lat: 40.7332953,
      lon: 31.6110479,
    },
  },
  {
    name: "Burdur",
    zipCode: "15000",
    geocoding: {
      lat: 37.7248394,
      lon: 30.2887286,
    },
  },
  {
    name: "Bursa",
    zipCode: "16000",
    geocoding: {
      lat: 40.182737,
      lon: 29.0675481,
    },
  },
  {
    name: "Çanakkale",
    zipCode: "17000",
    geocoding: {
      lat: 40.146271,
      lon: 26.4028892,
    },
  },
  {
    name: "Çankırı",
    zipCode: "18000",
    geocoding: {
      lat: 40.5971947,
      lon: 33.6212704,
    },
  },
  {
    name: "Çorum",
    zipCode: "19000",
    geocoding: {
      lat: 40.5491496,
      lon: 34.9602453,
    },
  },
  {
    name: "Denizli",
    zipCode: "20000",
    geocoding: {
      lat: 37.7833152,
      lon: 29.0844832,
    },
  },
  {
    name: "Diyarbakır",
    zipCode: "21000",
    geocoding: {
      lat: 37.9162222,
      lon: 40.2363542,
    },
  },
  {
    name: "Düzce",
    zipCode: "81000",
    geocoding: {
      lat: 40.8391531,
      lon: 31.1595361,
    },
  },
  {
    name: "Edirne",
    zipCode: "22000",
    geocoding: {
      lat: 41.6759327,
      lon: 26.5587225,
    },
  },
  {
    name: "Elazığ",
    zipCode: "23000",
    geocoding: {
      lat: 38.6747164,
      lon: 39.2227135,
    },
  },
  {
    name: "Erzincan",
    zipCode: "24000",
    geocoding: {
      lat: 39.7467552,
      lon: 39.49103,
    },
  },
  {
    name: "Erzurum",
    zipCode: "25000",
    geocoding: {
      lat: 39.90632,
      lon: 41.2727715,
    },
  },
  {
    name: "Eskişehir",
    zipCode: "26000",
    geocoding: {
      lat: 39.7743941,
      lon: 30.519116,
    },
  },
  {
    name: "Gaziantep",
    zipCode: "27000",
    geocoding: {
      lat: 37.0628317,
      lon: 37.3792617,
    },
  },
  {
    name: "Giresun",
    zipCode: "28000",
    geocoding: {
      lat: 40.9174453,
      lon: 38.3847864,
    },
  },
  {
    name: "Gümüşhane",
    zipCode: "29000",
    geocoding: {
      lat: 40.4617844,
      lon: 39.4757339,
    },
  },
  {
    name: "Hakkari",
    zipCode: "30000",
    geocoding: {
      lat: 37.5766959,
      lon: 43.7377862,
    },
  },
  {
    name: "Hatay",
    zipCode: "31000",
    geocoding: {
      lat: 36.2024887,
      lon: 36.1602761,
    },
  },
  {
    name: "Iğdır",
    zipCode: "76000",
    geocoding: {
      lat: 39.9218784,
      lon: 44.0467957,
    },
  },
  {
    name: "Isparta",
    zipCode: "32000",
    geocoding: {
      lat: 37.77035,
      lon: 30.5556933,
    },
  },
  {
    name: "İstanbul",
    zipCode: "34000",
    geocoding: {
      lat: 41.0091982,
      lon: 28.9662187,
    },
  },
  {
    name: "İzmir",
    zipCode: "35000",
    geocoding: {
      lat: 38.4224548,
      lon: 27.1310699,
    },
  },
  {
    name: "Kahramanmaraş",
    zipCode: "46000",
    geocoding: {
      lat: 37.5812744,
      lon: 36.927509,
    },
  },
  {
    name: "Karabük",
    zipCode: "78000",
    geocoding: {
      lat: 41.1955402,
      lon: 32.6231154,
    },
  },
  {
    name: "Karaman",
    zipCode: "70000",
    geocoding: {
      lat: 37.1816057,
      lon: 33.2181855,
    },
  },
  {
    name: "Kars",
    zipCode: "36000",
    geocoding: {
      lat: 40.6076749,
      lon: 43.0948497,
    },
  },
  {
    name: "Kastamonu",
    zipCode: "37000",
    geocoding: {
      lat: 41.3765359,
      lon: 33.7770087,
    },
  },
  {
    name: "Kayseri",
    zipCode: "38000",
    geocoding: {
      lat: 38.7219011,
      lon: 35.4873214,
    },
  },
  {
    name: "Kırıkkale",
    zipCode: "71000",
    geocoding: {
      lat: 39.8410483,
      lon: 33.5058536,
    },
  },
  {
    name: "Kırklareli",
    zipCode: "39000",
    geocoding: {
      lat: 41.7370223,
      lon: 27.2235523,
    },
  },
  {
    name: "Kırşehir",
    zipCode: "40000",
    geocoding: {
      lat: 39.1461142,
      lon: 34.1605587,
    },
  },
  {
    name: "Kilis",
    zipCode: "79000",
    geocoding: {
      lat: 36.7165722,
      lon: 37.114664,
    },
  },
  {
    name: "Kocaeli",
    zipCode: "41000",
    geocoding: {
      lat: 40.7632288,
      lon: 29.9262644,
    },
  },
  {
    name: "Konya",
    zipCode: "42000",
    geocoding: {
      lat: 37.872734,
      lon: 32.4924376,
    },
  },
  {
    name: "Kütahya",
    zipCode: "43000",
    geocoding: {
      lat: 39.4199106,
      lon: 29.9857886,
    },
  },
  {
    name: "Malatya",
    zipCode: "44000",
    geocoding: {
      lat: 38.3488506,
      lon: 38.3189466,
    },
  },
  {
    name: "Manisa",
    zipCode: "45000",
    geocoding: {
      lat: 38.6125793,
      lon: 27.4333969,
    },
  },
  {
    name: "Mardin",
    zipCode: "47000",
    geocoding: {
      lat: 37.3205482,
      lon: 40.7257727,
    },
  },
  {
    name: "Mersin",
    zipCode: "33000",
    geocoding: {
      lat: 36.7978381,
      lon: 34.6298391,
    },
  },
  {
    name: "Muğla",
    zipCode: "48000",
    geocoding: {
      lat: 37.2151202,
      lon: 28.3636912,
    },
  },
  {
    name: "Muş",
    zipCode: "49000",
    geocoding: {
      lat: 38.7322221,
      lon: 41.4898925,
    },
  },
  {
    name: "Nevşehir",
    zipCode: "50000",
    geocoding: {
      lat: 38.6250389,
      lon: 34.7150685,
    },
  },
  {
    name: "Niğde",
    zipCode: "51000",
    geocoding: {
      lat: 37.9712079,
      lon: 34.6775534,
    },
  },
  {
    name: "Ordu",
    zipCode: "52000",
    geocoding: {
      lat: 40.9852301,
      lon: 37.8797732,
    },
  },
  {
    name: "Osmaniye",
    zipCode: "80000",
    geocoding: {
      lat: 37.0733588,
      lon: 36.2507673,
    },
  },
  {
    name: "Rize",
    zipCode: "53000",
    geocoding: {
      lat: 41.0248249,
      lon: 40.5199142,
    },
  },
  {
    name: "Sakarya",
    zipCode: "54000",
    geocoding: {
      lat: 40.7795743,
      lon: 30.400376,
    },
  },
  {
    name: "Samsun",
    zipCode: "55000",
    geocoding: {
      lat: 41.2946149,
      lon: 36.3320596,
    },
  },
  {
    name: "Siirt",
    zipCode: "56000",
    geocoding: {
      lat: 37.9273623,
      lon: 41.94218,
    },
  },
  {
    name: "Sinop",
    zipCode: "57000",
    geocoding: {
      lat: 42.0265798,
      lon: 35.1511512,
    },
  },
  {
    name: "Sivas",
    zipCode: "58000",
    geocoding: {
      lat: 39.7503572,
      lon: 37.0145185,
    },
  },
  {
    name: "Şanlıurfa",
    zipCode: "63000",
    geocoding: {
      lat: 37.1564696,
      lon: 38.7921012,
    },
  },
  {
    name: "Şırnak",
    zipCode: "73000",
    geocoding: {
      lat: 37.5219577,
      lon: 42.4570311,
    },
  },
  {
    name: "Tekirdağ",
    zipCode: "59000",
    geocoding: {
      lat: 40.9781214,
      lon: 27.5107799,
    },
  },
  {
    name: "Tokat",
    zipCode: "60000",
    geocoding: {
      lat: 40.3233534,
      lon: 36.552162,
    },
  },
  {
    name: "Trabzon",
    zipCode: "61000",
    geocoding: {
      lat: 41.0062202,
      lon: 39.7257547,
    },
  },
  {
    name: "Tunceli",
    zipCode: "62000",
    geocoding: {
      lat: 39.1060641,
      lon: 39.5482693,
    },
  },
  {
    name: "Uşak",
    zipCode: "64000",
    geocoding: {
      lat: 38.6792659,
      lon: 29.4048895,
    },
  },
  {
    name: "Van",
    zipCode: "65000",
    geocoding: {
      lat: 38.500875,
      lon: 43.3946051,
    },
  },
  {
    name: "Yalova",
    zipCode: "77000",
    geocoding: {
      lat: 40.6582529,
      lon: 29.2699916,
    },
  },
  {
    name: "Yozgat",
    zipCode: "66000",
    geocoding: {
      lat: 39.8221974,
      lon: 34.8080972,
    },
  },
  {
    name: "Zonguldak",
    zipCode: "67000",
    geocoding: {
      lat: 41.4519168,
      lon: 31.7905959,
    },
  },
];

export default CITIES;
