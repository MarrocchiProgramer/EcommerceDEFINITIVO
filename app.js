const stockProductos = [
    {
        id: "guitarra-01",
        titulo: "Criolla LaAlpujarra",
        categoria: {
            nombre: "Criollas",
            id: "criolla"
        },
        precio: 70000,
        img: "./guitar-images/guitarra-criolla/Guitarra-Criolla-LaAlpujarra.png"
    },
    {
        id: "guitarra-02",
        titulo: "Criolla Midiplus",
        categoria: {
            nombre: "Criollas",
            id: "criolla"
        },
        precio: 180000,
        img: "./guitar-images/guitarra-criolla/Guitarra-Criolla-Midiplus.png"
    },
    {
        id: "guitarra-03",
        titulo: "Criolla Takamine",
        categoria: {
            nombre: "Criollas",
            id: "criolla"
        },
        precio: 40000,
        img: "./guitar-images/guitarra-criolla/Guitarra-Criolla-Takamine.png"
    },
    {
        id: "guitarra-04",
        titulo: "Acustica Cort",
        categoria: {
            nombre: "Acusticas",
            id: "acustica"
        },
        precio: 125000,
        img: "./guitar-images/guitarra-acustica/Guitarra-Acustica-Cort.png"
    },
    {
        id: "guitarra-05",
        titulo: "Acustica Ivanez",
        categoria: {
            nombre: "Acusticas",
            id: "acustica"
        },
        precio: 170000,
        img: "./guitar-images/guitarra-acustica/Guitarra-Acustica-Ivanez.png"
    },
    {
        id: "guitarra-06",
        titulo: "Acustica Parquer",
        categoria: {
            nombre: "Acusticas",
            id: "acustica"
        },
        precio: 85000,
        img: "./guitar-images/guitarra-acustica/Guitarra-Acustica-Parquer.png"
    },
    {
        id: "guitarra-07",
        titulo: "Electroacustica Cort",
        categoria: {
            nombre: "Electroacusticas",
            id: "electroacustica"
        },
        precio: 90000,
        img: "./guitar-images/guitarra-electroacustica/Guitarra-ElectroAcustica-Cort.png"
    },
    {
        id: "guitarra-08",
        titulo: "Electroacustica Mahogany",
        categoria: {
            nombre: "Electroacusticas",
            id: "electroacustica"
        },
        precio: 75000,
        img: "./guitar-images/guitarra-electroacustica/Guitarra-Electroacustica-Mahogany.png"
    },
    {
        id: "guitarra-09",
        titulo: "Electroacustica Sigma",
        categoria: {
            nombre: "Electroacusticas",
            id: "electroacustica"
        },
        precio: 145000,
        img: "./guitar-images/guitarra-electroacustica/Guitarra-Electroacustica-Sigma.png"
    },
    {
        id: "guitarra-10",
        titulo: "Electrica Epiphone",
        categoria: {
            nombre: "Electricas",
            id: "electrica"
        },
        precio: 250000,
        img: "./guitar-images/guitarra-electrica/Guitarra-Electrica-Epiphone.png"
    },
    {
        id: "guitarra-11",
        titulo: "Electrica Ibanez",
        categoria: {
            nombre: "Electricas",
            id: "electrica"
        },
        precio: 375000,
        img: "./guitar-images/guitarra-electrica/Guitarra-Electrica-Ibanez.png"
    },
    {
        id: "guitarra-12",
        titulo: "Electrica Tagima",
        categoria: {
            nombre: "Electricas",
            id: "electrica"
        },
        precio: 100000,
        img: "./guitar-images/guitarra-electrica/Guitarra-Electrica-Tagima.png"
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".productos-agregar");

// Con esta funcion creamos todos los divs con el contenido que necesitamos pintar en la pagina

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div data-aos="zoom-in">
            <img src="${producto.img}" class="producto-imagen"
            alt="...">
            <div class="productos-detalles">
                <h5 class="productos-titulo">${producto.titulo}</h5>
                <p class="productos-precio">Precio: $${producto.precio}</p>
                <button class="productos-agregar" id:"${producto.id}">Agregar al carrito</button>
            </div>
        </div>
        `

        contenedorProductos.append(div);


    })

}

cargarProductos(stockProductos);

// esta funcion sirve para que cuando se hace click en los botones del menu
//sucedan acciones

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        //  Este if sirve para filtrar los tipos de guitarra y traerlos por categoria
        //si no requiere filtrar muestra todas las guitarras
        if(e.currentTarget.id != "todos"){
            const productoCategoria = stockProductos.find(producto => producto.categoria.id == e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = stockProductos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(stockProductos);
        }

    })
})

// Esta funcion la necesitamos para que no se creen botones nuevos, sino que se guarden

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".productos-agregar")
}