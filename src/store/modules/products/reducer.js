const defaultProducts = [
  {
    id: 1,
    name: "Galaxy watch Active 2 Nacional Prata",
    price: 584.9,
    installment: "58,49",
    quantity: 0,
    type: "smartwatch",
    img: "https://cdn.discordapp.com/attachments/382951786333470721/893333205166485544/3030.png",
  },
  {
    id: 2,
    name: "Notebook Acer AMD Ryzen 7, 8GB, 512GB, 15,6, Nvidia GeForce GTX 1650 Ti",
    price: 5874.41,
    type: "notebook",
    quantity: 0,
    installment: "587,41",
    img: "https://cdn.discordapp.com/attachments/382951786333470721/893333227991859200/1.png",
  },
  {
    id: 3,
    name: "Notebook Acer Aspire 3 AMD Ryzen 7-3700U 8GB, 256GB SSD, 15.6´ HD 1366x768, Windows 10 Home",
    price: 3689.9,
    installment: "369,99",
    type: "notebook",
    quantity: 0,
    img: "https://cdn.discordapp.com/attachments/382951786333470721/893333228868485140/2.png",
  },
  {
    id: 4,
    name: "iPhone 12 Pro Apple 128GB Grafite Tela de 6,1”, Câmera Tripla de 12MP, iOSi",
    price: 6881.07,
    type: "celular",
    installment: "688,07",
    quantity: 0,
    img: "https://cdn.discordapp.com/attachments/382951786333470721/893333217367711754/aaaaa.png",
  },
  {
    id: 5,
    name: "Mini Bluetooth Jbl Go2 Go 2 100% Prova D 'Gua Alto Falante Porta Til destiny",
    price: 459.0,
    type: "outros",
    installment: "45,90",
    quantity: 0,
    img: "https://cdn.discordapp.com/attachments/382951786333470721/893333231821262888/3.png",
  },
  {
    id: 6,
    name: "Galaxy S21 Ultra 5G Preto 256GB",
    price: 7199.1,
    installment: "719,90",
    type: "celular",
    quantity: 0,
    img: "https://cdn.discordapp.com/attachments/382951786333470721/893333225890533376/505050.png",
  },

  {
    id: 7,
    name: "Ipad Air Apple 4 Geração  64GB Azul",
    price: 4259.0,
    installment: "425,90",
    img: "https://cdn.discordapp.com/attachments/382951786333470721/893333225655640074/50.png",
    type: "Ipad",
    quantity: 0,
  },

  {
    id: 8,
    name: "Kindle 10a. geração com bateria de longa duração Cor Preta",
    price: 399.0,
    installment: "39,90",
    type: "Ipad",
    quantity: 0,
    img: "https://cdn.discordapp.com/attachments/382951786333470721/893333208840683530/333333.png",
  },
];
const productsReducer = (state = defaultProducts, action) => {
  return state;
};
export default productsReducer;
