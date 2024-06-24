//index.html

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
];

//guardo el arreglo de productos en localStorage si es que no está guardado aún
if (!localStorage.getItem("productos")) {
  localStorage.setItem("productos", JSON.stringify(productos));
}

//cargo los productos de el localStorage
let productosGuardados =
  JSON.parse(localStorage.getItem("productos")) || productos;

//iterar el arreglo de productos y mostrarlo en pantalla
let cards = document.getElementById("cards");
let agregadosAlCarrito = [];
function agregarAlCarrito(id) {
  let producto = productos.find((prod) => prod.id == id);
  let carrito = document.getElementById("productos");
  let total = document.getElementById("total");
  agregadosAlCarrito.push(producto);
  let carritohtml = "";
  let totalhtml = "";
  agregadosAlCarrito.forEach((productoAgregado) => {
    carritohtml += `
      <div>
        <p>${productoAgregado.nombre}</p>
        <p>${productoAgregado.precio}$</p>
      </div>
    `;
  });
  let totalPrecios = 0;
  agregadosAlCarrito.forEach((productoAgregado) => {
    totalPrecios += productoAgregado.precio;
  });
  totalhtml += `
    <div>
      <p>Total</p>
      <p>${totalPrecios}$</p>
    </div>
  `;
  total.innerHTML = totalhtml;
  carrito.innerHTML = carritohtml;
}

function filtrar(categoria) {
  mostrarProductos(categoria);
}

function mostrarProductos(categoria) {
  let cardhtml = ``;
  let categoriaTodos = document.getElementById("todos");
  let categoriaBebidas = document.getElementById("Bebidas");
  let categoriaPanaderia = document.getElementById("Panadería");
  let categoriaReposteria = document.getElementById("Repostería");

  let productosFiltrados =
    categoria == "todos"
      ? productosGuardados
      : productosGuardados.filter(
          (producto) => producto.categoria == categoria
        );

  if (
    categoriaTodos != null &&
    categoriaBebidas != null &&
    categoriaPanaderia != null &&
    categoriaReposteria != null
  ) {
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
  }
  if (cards != null) {
    productosFiltrados.forEach((producto) => {
      cardhtml += `
      <div class="card">
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <div>
          <span>
            <h4>${producto.nombre}</h4>
            <p>${producto.precio}$</p>
          </span>
          <button onclick="agregarAlCarrito(${producto.id})"> Agregar </button>
        </div>
      </div>
      `;
    });
    cards.innerHTML = cardhtml;
  }
}

let ordenes = [];

function finalizarOrden() {
  let carrito = document.getElementById("productos");
  let total = document.getElementById("total");

  if (agregadosAlCarrito.length > 0) {
    let ordenesGuardadas = JSON.parse(localStorage.getItem("ordenes")) || [];
    ordenesGuardadas.push(agregadosAlCarrito);
    localStorage.setItem("ordenes", JSON.stringify(ordenesGuardadas));

    agregadosAlCarrito = [];
    carrito.innerHTML = "";
    total.innerHTML = `
      <div>
        <p>Total</p>
        <p>0$</p>
      </div>
    `;
  } else {
    carrito.innerHTML =
      "<div>Para comprar, primero debe agregar un producto al carrito</div>";
  }
}

// ordenes.html
function cargarOrdenes() {
  let ordenesRealizadas = document.getElementById("ordenes");
  let ordenesGuardadas = JSON.parse(localStorage.getItem("ordenes")) || [];

  if (ordenesRealizadas != null) {
    if (ordenesGuardadas.length > 0) {
      let ordeneshtml = "";

      ordenesGuardadas.forEach((orden, index) => {
        ordeneshtml += `
              <div>
              <h4>Orden N° ${index + 1}</h4>
              <ul>Productos:
                ${orden
                  .map((producto) => `<li>${producto.nombre}</li>`)
                  .join("")}
              </ul>
              <p>Precio total:
              ${orden.reduce((acc, producto) => acc + producto.precio, 0)}$
              </p>
              <button onclick="ordenTerminada(${index})">Finalizada</button>
            </div>
        `;
      });
      ordenesRealizadas.innerHTML = ordeneshtml;
    } else {
      ordenesRealizadas.innerHTML = "<h1>No hay órdenes pendientes</h1>";
    }
  }
}

function ordenTerminada(index) {
  let ordenesGuardadas = JSON.parse(localStorage.getItem("ordenes")) || [];
  ordenesGuardadas.splice(index, 1);
  localStorage.setItem("ordenes", JSON.stringify(ordenesGuardadas));
  cargarOrdenes();
}

// Llamar funciones dependiendo de la página

document.addEventListener("DOMContentLoaded", (event) => {
  let path = window.location.pathname;

  if (path.includes("index.html")) {
    mostrarProductos("todos");
  } else if (path.includes("administrador-ordenes.html")) {
    cargarOrdenes();
  }
});
