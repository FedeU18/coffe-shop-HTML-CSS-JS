const productos = [
  {
    id: 1,
    nombre: "Café Espresso",
    precio: 2.5,
    categoria: "Bebidas",
    imagen: "../imagenes/espresso.jpg",
  },
  {
    id: 2,
    nombre: "Capuchino",
    precio: 3.0,
    categoria: "Bebidas",
    imagen: "../imagenes/capuchino.jpg",
  },
  {
    id: 3,
    nombre: "Croissant",
    precio: 1.5,
    categoria: "Panadería",
    imagen: "../imagenes/croissant.jpg",
  },
  // {
  //   id: 4,
  //   nombre: "Tarta de Chocolate",
  //   precio: 4.0,
  //   categoria: "Repostería",
  //   imagen: "imagenes/tarta_chocolate.jpg",
  // },
  // {
  //   id: 5,
  //   nombre: "Latte",
  //   precio: 3.5,
  //   categoria: "Bebidas",
  //   imagen: "imagenes/latte.jpg",
  // },
  // {
  //   id: 6,
  //   nombre: "Americano",
  //   precio: 2.0,
  //   categoria: "Bebidas",
  //   imagen: "imagenes/americano.jpg",
  // },
  // {
  //   id: 7,
  //   nombre: "Bagel",
  //   precio: 2.5,
  //   categoria: "Panadería",
  //   imagen: "imagenes/bagel.jpg",
  // },
  // {
  //   id: 8,
  //   nombre: "Sándwich de Jamón y Queso",
  //   precio: 3.5,
  //   categoria: "Panadería",
  //   imagen: "imagenes/sandwich.jpg",
  // },
  // {
  //   id: 9,
  //   nombre: "Brownie",
  //   precio: 2.0,
  //   categoria: "Repostería",
  //   imagen: "imagenes/brownie.jpg",
  // },
  // {
  //   id: 10,
  //   nombre: "Muffin de Arándanos",
  //   precio: 2.5,
  //   categoria: "Repostería",
  //   imagen: "imagenes/muffin_arandanos.jpg",
  // },
  // {
  //   id: 11,
  //   nombre: "Té Verde",
  //   precio: 2.0,
  //   categoria: "Bebidas",
  //   imagen: "imagenes/te_verde.jpg",
  // },
  // {
  //   id: 12,
  //   nombre: "Té Negro",
  //   precio: 2.0,
  //   categoria: "Bebidas",
  //   imagen: "imagenes/te_negro.jpg",
  // },
  // {
  //   id: 13,
  //   nombre: "Café Mocha",
  //   precio: 3.8,
  //   categoria: "Bebidas",
  //   imagen: "imagenes/mocha.jpg",
  // },
  // {
  //   id: 14,
  //   nombre: "Café con Leche",
  //   precio: 3.0,
  //   categoria: "Bebidas",
  //   imagen: "imagenes/cafe_leche.jpg",
  // },
  // {
  //   id: 15,
  //   nombre: "Pan de Banana",
  //   precio: 2.5,
  //   categoria: "Panadería",
  //   imagen: "imagenes/pan_banana.jpg",
  // },
  // {
  //   id: 16,
  //   nombre: "Donut Glaseado",
  //   precio: 1.8,
  //   categoria: "Panadería",
  //   imagen: "imagenes/donut.jpg",
  // },
  // {
  //   id: 17,
  //   nombre: "Cheesecake",
  //   precio: 3.5,
  //   categoria: "Repostería",
  //   imagen: "imagenes/cheesecake.jpg",
  // },
  // {
  //   id: 18,
  //   nombre: "Macaron",
  //   precio: 1.5,
  //   categoria: "Repostería",
  //   imagen: "imagenes/macaron.jpg",
  // },
];

//iterar el arreglo de productos y mostrarlo en pantalla
let cards = document.getElementById("cards");

let cardhtml = ``;

function agregarAlCarrito(id) {
  console.log(id);
}

productos.forEach((producto) => {
  cardhtml += `<div class="card">
              <img src="${producto.imagen}" alt="${producto.nombre}" />
              <div>
                <h3>${producto.nombre}</h3>
                <p>${producto.precio}$</p>
                <button onclick="agregarAlCarrito(${producto.id})"> Agregar </button>
              </div>
            </div>`;
});
cards.innerHTML = cardhtml;
