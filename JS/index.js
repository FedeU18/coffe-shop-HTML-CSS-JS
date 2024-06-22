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
  {
    id: 4,
    nombre: "Tarta de Chocolate",
    precio: 4.0,
    categoria: "Repostería",
    imagen: "../imagenes/tarta_chocolate.png",
  },
  {
    id: 5,
    nombre: "Latte",
    precio: 3.5,
    categoria: "Bebidas",
    imagen: "../imagenes/latte.png",
  },
  {
    id: 6,
    nombre: "Café helado",
    precio: 2.0,
    categoria: "Bebidas",
    imagen: "../imagenes/americano.png",
  },
  {
    id: 7,
    nombre: "Bagel",
    precio: 2.5,
    categoria: "Panadería",
    imagen: "../imagenes/bagel.png",
  },
  {
    id: 8,
    nombre: "Sándwich de Jamón y Queso",
    precio: 3.5,
    categoria: "Panadería",
    imagen: "../imagenes/sandwich.png",
  },
  {
    id: 9,
    nombre: "Brownie",
    precio: 2.0,
    categoria: "Repostería",
    imagen: "../imagenes/brownie.png",
  },
  // {
  //   id: 10,
  //   nombre: "Muffin de Arándanos",
  //   precio: 2.5,
  //   categoria: "Repostería",
  //   imagen: "../imagenes/muffin_arandanos.jpg",
  // },
  // {
  //   id: 11,
  //   nombre: "Té Verde",
  //   precio: 2.0,
  //   categoria: "Bebidas",
  //   imagen: "../imagenes/te_verde.jpg",
  // },
  // {
  //   id: 12,
  //   nombre: "Té Negro",
  //   precio: 2.0,
  //   categoria: "Bebidas",
  //   imagen: "../imagenes/te_negro.jpg",
  // },
  // {
  //   id: 13,
  //   nombre: "Café Mocha",
  //   precio: 3.8,
  //   categoria: "Bebidas",
  //   imagen: "../imagenes/mocha.jpg",
  // },
  // {
  //   id: 14,
  //   nombre: "Café con Leche",
  //   precio: 3.0,
  //   categoria: "Bebidas",
  //   imagen: "../imagenes/cafe_leche.jpg",
  // },
  // {
  //   id: 15,
  //   nombre: "Pan de Banana",
  //   precio: 2.5,
  //   categoria: "Panadería",
  //   imagen: "../imagenes/pan_banana.jpg",
  // },
  // {
  //   id: 16,
  //   nombre: "Donut Glaseado",
  //   precio: 1.8,
  //   categoria: "Panadería",
  //   imagen: "../imagenes/donut.jpg",
  // },
  // {
  //   id: 17,
  //   nombre: "Cheesecake",
  //   precio: 3.5,
  //   categoria: "Repostería",
  //   imagen: "../imagenes/cheesecake.jpg",
  // },
  // {
  //   id: 18,
  //   nombre: "Macaron",
  //   precio: 1.5,
  //   categoria: "Repostería",
  //   imagen: "../imagenes/macaron.jpg",
  // },
];

//iterar el arreglo de productos y mostrarlo en pantalla
let cards = document.getElementById("cards");
let agregadosAlCarrito = [];
function agregarAlCarrito(id) {
  let producto = productos.find((prod) => (prod.id = id));
  console.log(producto);
  agregadosAlCarrito.push(producto);
  let carritohtml = "";
  agregadosAlCarrito.forEach((producto) => {});
}

function filtrar(id) {
  mostrarProductos(id);
}

function mostrarProductos(categoria) {
  let cardhtml = ``;
  let categoriaTodos = document.getElementById("todos");
  let categoriaBebidas = document.getElementById("Bebidas");
  let categoriaPanaderia = document.getElementById("Panadería");
  let categoriaReposteria = document.getElementById("Repostería");
  let productosFiltrados =
    categoria == "todos"
      ? productos
      : productos.filter((producto) => producto.categoria == categoria);
  if (categoria == "todos") {
    categoriaTodos.style.backgroundColor = "#ffd900";
    categoriaBebidas.style.backgroundColor = "inherit";
    categoriaPanaderia.style.backgroundColor = "inherit";
    categoriaReposteria.style.backgroundColor = "inherit";
  }
  if (categoria == "Bebidas") {
    categoriaTodos.style.backgroundColor = "inherit";
    categoriaBebidas.style.backgroundColor = "#ffd900";
    categoriaPanaderia.style.backgroundColor = "inherit";
    categoriaReposteria.style.backgroundColor = "inherit";
  }
  if (categoria == "Panadería") {
    categoriaTodos.style.backgroundColor = "inherit";
    categoriaBebidas.style.backgroundColor = "inherit";
    categoriaPanaderia.style.backgroundColor = "#ffd900";
    categoriaReposteria.style.backgroundColor = "inherit";
  }
  if (categoria == "Repostería") {
    categoriaTodos.style.backgroundColor = "inherit";
    categoriaBebidas.style.backgroundColor = "inherit";
    categoriaPanaderia.style.backgroundColor = "inherit";
    categoriaReposteria.style.backgroundColor = "#ffd900";
  }

  productosFiltrados.forEach((producto) => {
    cardhtml += `<div class="card">
                <img src="${producto.imagen}" alt="${producto.nombre}" />
                <div>
                  <span>
                    <h4>${producto.nombre}</h4>
                    <p>${producto.precio}$</p>
                  </span>
                  <button onclick="agregarAlCarrito(${producto.id})"> Agregar </button>
                </div>
              </div>`;
  });
  cards.innerHTML = cardhtml;
}

mostrarProductos("todos");
