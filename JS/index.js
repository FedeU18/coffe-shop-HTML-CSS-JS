const productos = [
  {
    nombre: "Café Espresso",
    precio: 2.5,
    categoria: "Bebidas",
    imagen: "imagenes/espresso.jpg",
  },
  {
    nombre: "Capuchino",
    precio: 3.0,
    categoria: "Bebidas",
    imagen: "imagenes/capuchino.jpg",
  },
  {
    nombre: "Croissant",
    precio: 1.5,
    categoria: "Panadería",
    imagen: "imagenes/croissant.jpg",
  },
  {
    nombre: "Tarta de Chocolate",
    precio: 4.0,
    categoria: "Repostería",
    imagen: "imagenes/tarta_chocolate.jpg",
  },
  {
    nombre: "Latte",
    precio: 3.5,
    categoria: "Bebidas",
    imagen: "imagenes/latte.jpg",
  },
  {
    nombre: "Americano",
    precio: 2.0,
    categoria: "Bebidas",
    imagen: "imagenes/americano.jpg",
  },
  {
    nombre: "Bagel",
    precio: 2.5,
    categoria: "Panadería",
    imagen: "imagenes/bagel.jpg",
  },
  {
    nombre: "Sándwich de Jamón y Queso",
    precio: 3.5,
    categoria: "Panadería",
    imagen: "imagenes/sandwich.jpg",
  },
  {
    nombre: "Brownie",
    precio: 2.0,
    categoria: "Repostería",
    imagen: "imagenes/brownie.jpg",
  },
  {
    nombre: "Muffin de Arándanos",
    precio: 2.5,
    categoria: "Repostería",
    imagen: "imagenes/muffin_arandanos.jpg",
  },
  {
    nombre: "Té Verde",
    precio: 2.0,
    categoria: "Bebidas",
    imagen: "imagenes/te_verde.jpg",
  },
  {
    nombre: "Té Negro",
    precio: 2.0,
    categoria: "Bebidas",
    imagen: "imagenes/te_negro.jpg",
  },
  {
    nombre: "Café Mocha",
    precio: 3.8,
    categoria: "Bebidas",
    imagen: "imagenes/mocha.jpg",
  },
  {
    nombre: "Café con Leche",
    precio: 3.0,
    categoria: "Bebidas",
    imagen: "imagenes/cafe_leche.jpg",
  },
  {
    nombre: "Pan de Banana",
    precio: 2.5,
    categoria: "Panadería",
    imagen: "imagenes/pan_banana.jpg",
  },
  {
    nombre: "Donut Glaseado",
    precio: 1.8,
    categoria: "Panadería",
    imagen: "imagenes/donut.jpg",
  },
  {
    nombre: "Cheesecake",
    precio: 3.5,
    categoria: "Repostería",
    imagen: "imagenes/cheesecake.jpg",
  },
  {
    nombre: "Macaron",
    precio: 1.5,
    categoria: "Repostería",
    imagen: "imagenes/macaron.jpg",
  },
];

let cards = document.getElementById("cards");
console.log(cards.childNodes);

cards.innerHTML = `<div class="card">
              <img src="../imagenes/espresso.jpg" alt="expresso" />
              <h3>Expresso</h3>
              <p>3.55$</p>
            </div>`;