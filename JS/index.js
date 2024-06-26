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
let productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];

//iterar el arreglo de productos y mostrarlo en pantalla
let cards = document.getElementById("cards");
let agregadosAlCarrito = [];
function agregarAlCarrito(id) {
  let productoAlCarrito = productosGuardados.find((prod) => prod.id == id);
  let carrito = document.getElementById("productos");
  let total = document.getElementById("total");
  agregadosAlCarrito.push(productoAlCarrito);
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

  if (productosGuardados.length > 0) {
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
      categoriaTodos.style.backgroundColor =
        categoria == "todos" ? "#ffd900" : "inherit";
      categoriaBebidas.style.backgroundColor =
        categoria == "Bebidas" ? "#ffd900" : "inherit";
      categoriaPanaderia.style.backgroundColor =
        categoria == "Panadería" ? "#ffd900" : "inherit";
      categoriaReposteria.style.backgroundColor =
        categoria == "Repostería" ? "#ffd900" : "inherit";
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
  } else {
    if (cards != null) {
      cards.innerHTML = "<h1>AÚN NO HAY PRODUCTOS CARGADOS</h1>";
    }
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

//productos.html

function cargarProductos() {
  let tablaProductos = document.getElementById("body-productos");
  let tabla = document.getElementById("tabla-productos");
  let productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
  let tablahtml = "";
  if (productosGuardados.length > 0) {
    productosGuardados.forEach((producto) => {
      tablahtml += `
         <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}$</td>
            <td>${producto.categoria}</td>
            <td><button onclick="eliminarProducto(${producto.id})">Eliminar</button></td>
          </tr>
      `;
      tablaProductos.innerHTML = tablahtml;
    });
  } else {
    tablahtml = `<thead><tr><td>AÚN NO HAY PRODUCTOS CARGADOS</td></tr></thead>`;
    tabla.innerHTML = tablahtml;
  }
}

function buscarProducto() {
  let productoBuscado = document.getElementById("buscar").value.toLowerCase();
  let productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
  let tablaProductos = document.getElementById("body-productos");
  let tablahtml = "";
  let productoEncontrado = productosGuardados.filter((producto) =>
    producto.nombre.toLowerCase().includes(productoBuscado)
  );
  if (productoEncontrado.length > 0) {
    productoEncontrado.forEach((producto) => {
      tablahtml += `
        <tr>
          <td>${producto.id}</td>
          <td>${producto.nombre}</td>
          <td>${producto.precio}$</td>
          <td>${producto.categoria}</td>
          <td><button onclick="eliminarProducto(${producto.id})">Eliminar</button></td>
        </tr>
      `;
    });
    tablahtml += `
      <tr>
        <td colspan="5">
          <button onclick="cargarProductos()">Recargar</button>
        </td>
      </tr>
    `;
    tablaProductos.innerHTML = tablahtml;
  } else {
    tablahtml = `
      <tr>
        <td colspan="5">
          NO SE ENCONTRÓ EL PRODUCTO '${productoBuscado}'   
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <button onclick="cargarProductos()">Recargar</button>
        </td>
      </tr>
    `;
    tablaProductos.innerHTML = tablahtml;
  }
}

function eliminarProducto(id) {
  if (confirm("¿Está seguro que desea realizar esta acción?")) {
    let productosGuardados =
      JSON.parse(localStorage.getItem("productos")) || [];
    productosGuardados = productosGuardados.filter(
      (producto) => producto.id != id
    );
    localStorage.setItem("productos", JSON.stringify(productosGuardados));
  }
  cargarProductos();
}

//formulario.html

function inputfocus(id) {
  let inputSeleccionado = document.getElementById(id);
  inputSeleccionado.style.backgroundColor = "#f8e991";
  inputSeleccionado.style.borderColor = "black";
  inputSeleccionado.style.scale = "1.05";
}
function inputblur(id) {
  let inputSeleccionado = document.getElementById(id);
  inputSeleccionado.style.backgroundColor = "inherit";
  inputSeleccionado.style.scale = "1";
  pintarInput(inputSeleccionado);
}

function inputonchange(id) {
  let inputSeleccionado = document.getElementById(id);
  pintarInput(inputSeleccionado);
}

function pintarInput(inputSeleccionado) {
  if (inputSeleccionado.value === "") {
    inputSeleccionado.style.borderColor = "red";
  } else {
    inputSeleccionado.style.borderColor = "green";
  }

  if (inputSeleccionado.id === "imagen") {
    let imagenValue = inputSeleccionado.value;
    if (
      !imagenValue.startsWith("http://") &&
      !imagenValue.startsWith("https://")
    ) {
      inputSeleccionado.style.borderColor = "red";
    } else {
      inputSeleccionado.style.borderColor = "green";
    }
  }

  manejarBtnSubmit();
}

function manejarBtnSubmit() {
  let nombre = document.getElementById("nombre");
  let precio = document.getElementById("precio");
  let categoria = document.getElementById("categorias");
  let imagen = document.getElementById("imagen");
  let btnSubmit = document.getElementById("btn-submit");

  if (
    nombre.value === "" ||
    precio.value === "" ||
    categoria.value === "" ||
    (!imagen.value.startsWith("http://") &&
      !imagen.value.startsWith("https://"))
  ) {
    btnSubmit.disabled = true;
  } else {
    btnSubmit.disabled = false;
  }
}

function agregarProducto(event) {
  event.preventDefault();
}

// Llamar funciones dependiendo de la página

document.addEventListener("DOMContentLoaded", (event) => {
  let path = window.location.pathname;

  if (path.includes("index.html")) {
    mostrarProductos("todos");
  } else if (path.includes("administrador-ordenes.html")) {
    cargarOrdenes();
  } else if (path.includes("administrador-productos.html")) {
    cargarProductos();
  } else if (path.includes("administrador-formulario.html")) {
    let formulario = document.getElementById("formulario-producto");
    formulario.addEventListener("submit", agregarProducto);
  }
});
