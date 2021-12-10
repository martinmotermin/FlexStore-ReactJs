const products = [
  {
    id: 1,
    name: "ZX 1K BOOST",
    price: 18.499,
    stock: 20,
    brand: "Adidas",
    category: "Men",
    src: "https://essential.vteximg.com.br/arquivos/ids/468124-1000-1000/261-2681_2.jpg?v=637672426479230000",
  },
  {
    id: 2,
    name: "RS-Z",
    price: 15.799,
    stock: 20,
    brand: "Puma",
    category: "Men",
    src: "https://essential.vteximg.com.br/arquivos/ids/499399-1000-1000/961-9187_5.jpg?v=637733467713200000",
  },
  {
    id: 3,
    name: "CITY RIDER",
    price: 14.299,
    stock: 20,
    brand: "Puma",
    category: "Men",
    src: "https://essential.vteximg.com.br/arquivos/ids/499786-1000-1000/961-1538_2.jpg?v=637735305083070000",
  },
  {
    id: 4,
    name: "MIRAGE SPORT",
    price: 17.299,
    stock: 20,
    brand: "Puma",
    category: "Men",
    src: "https://essential.vteximg.com.br/arquivos/ids/491348-1000-1000/961-1523_2.jpg?v=637717099857700000",
  },
  {
    id: 5,
    name: "GRAVITON PRO",
    price: 11.699,
    stock: 20,
    brand: "Puma",
    category: "Men",
    src: "https://essential.vteximg.com.br/arquivos/ids/471978-1000-1000/961-3308_2.jpg?v=637675012242530000",
  },
];
export const getProducts = new Promise((res, rej) => {
  setTimeout(() => {
    res(products);
  }, 3000);
});
