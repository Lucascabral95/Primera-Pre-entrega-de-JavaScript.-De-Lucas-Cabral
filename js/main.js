//VARIABLE QUE MUESTRA TODOS LOS ARTICULOS EXISTENTES CON SUS NOMBRES, CATEGORIAS, DESCRIPCION, CANTIDAD, PRECIO E IMAGEN ILUSTRATIVA.
const producto = [
    //PELUCHES DE POKEMON.
    { id: 1, nombre: "Pikachu", descripcion: "Pikachu Edicion-Limitada", categoria: "Peluche", cantidad: 1, precio: 1500, img: "./img/peluche-pikachu.jpg" },
    { id: 2, nombre: "Mew", descripcion: "Mew Ultra-Limitado", categoria: "Peluche", cantidad: 1, precio: 3850, img: "./img/peluche-mew.jpeg" },
    { id: 3, nombre: "Charmander", descripcion: "Charmander Edicion-Limitada", categoria: "Peluche", cantidad: 1, precio: 1000, img: "./img/peluche-charmander.jpeg" },
    { id: 4, nombre: "Squirtle", descripcion: "Squirtle Edicion-Limitada", categoria: "Peluche", cantidad: 1, precio: 1200, img: "./img/peluche-squirtle.jpg" },
    { id: 5, nombre: "Eevee", descripcion: "Eevee Ultra-Limitado", categoria: "Peluche", cantidad: 1, precio: 5400, img: "./img/peluche-eevee.jpeg" },
    { id: 6, nombre: "Bulbasur", descripcion: "Bulbasur Edicion-Limitada", categoria: "Peluche", cantidad: 1, precio: 1100, img: "./img/peluche-bulbasur.jpg" },
    { id: 7, nombre: "Lapras", descripcion: "Lapras Edicion-Limitada", categoria: "Peluche", cantidad: 1, precio: 900, img: "./img/peluche-lapras.jpg" },
    { id: 8, nombre: "Raichu", descripcion: "Raichu Edicion-Limitada", categoria: "Peluche", cantidad: 1, precio: 850, img: "./img/peluche-raichu.webp" },
    { id: 9, nombre: "Vulpix", descripcion: "Vulpix Edicion-Limitada", categoria: "Peluche", cantidad: 1, precio: 1300, img: "./img/peluche-vulpix.jpg" },
    { id: 10, nombre: "Zapdos", descripcion: "Zapdos Edicion-Limitada", categoria: "Peluche", cantidad: 1, precio: 1900, img: "./img/peluche-zapdos.jpg" },
    { id: 11, nombre: "Latios", descripcion: "Latios Edicion-Limitada", categoria: "Peluche", cantidad: 1, precio: 2150, img: "./img/peluche-latios.jpg" },
    { id: 12, nombre: "Latias", descripcion: "Latias Edicion-Limitada", categoria: "Peluche", cantidad: 1, precio: 2150, img: "./img/peluche-latias.jpg" },
    { id: 13, nombre: "Latios y Latias", descripcion: "Pack Mega-Raro", categoria: "Peluche", cantidad: 1, precio: 5100, img: "./img/peluche-latios-latias.jpeg" },
    { id: 14, nombre: "Suicune", descripcion: "Suicune Edicion-Limitada", categoria: "Peluche", cantidad: 1, precio: 3000, img: "./img/peluche-suicune.jpg" },
    { id: 15, nombre: "Cobalion", descripcion: "Cobalion Edicion-Limitada", categoria: "Peluche", cantidad: 1, precio: 2800, img: "./img/peluche-cobalion.jpg" },
    { id: 16, nombre: "Reshiram", descripcion: "Reshiram Ultra-Limitado", categoria: "Peluche", cantidad: 1, precio: 3700, img: "./img/peluche-reshiram.jpg" },
    //JUEGOS DE POKEMON.
    { id: 17, nombre: "Pokemon Rojo", descripcion: "Primera Generacion", categoria: "Videojuego", cantidad: 1, precio: 1300, img: "./img/juego-rojo.webp" },
    { id: 18, nombre: "Pokemon Azul", descripcion: "Primera Generacion", categoria: "Videojuego", cantidad: 1, precio: 1300, img: "./img/juego-azul.webp" },
    { id: 19, nombre: "Pokemon Oro", descripcion: "Segunda Generacion", categoria: "Videojuego", cantidad: 1, precio: 1250, img: "./img/juego-oro.webp" },
    { id: 20, nombre: "Pokemon Plata", descripcion: "Segunda Generacion", categoria: "Videojuego", cantidad: 1, precio: 1250, img: "./img/juego-plata.webp" },
    { id: 21, nombre: "Pokemon Rubi", descripcion: "Tercera Generacion", categoria: "Videojuego", cantidad: 1, precio: 950, img: "./img/juego-rubi.webp" },
    { id: 22, nombre: "Pokemon Zafiro", descripcion: "Tercera Generacion", categoria: "Videojuego", cantidad: 1, precio: 950, img: "./img/juego-zafiro.webp" },
    { id: 23, nombre: "Pokemon Diamante", descripcion: "Cuarta Generacion", categoria: "Videojuego", cantidad: 1, precio: 1250, img: "./img/juego-diamante.webp" },
    { id: 24, nombre: "Pokemon Perla", descripcion: "Cuarta Generacion", categoria: "Videojuego", cantidad: 1, precio: 1250, img: "./img/juego-perla.webp" },
    { id: 25, nombre: "Pokemon Negro", descripcion: "Quinta Generacion", categoria: "Videojuego", cantidad: 1, precio: 1550, img: "./img/juego-negro.webp" },
    { id: 26, nombre: "Pokemon Blanco", descripcion: "Quinta Generacion", categoria: "Videojuego", cantidad: 1, precio: 1550, img: "./img/juego-blanco.webp" },
    { id: 27, nombre: "Pokemon X", descripcion: "Sexta Generacion", categoria: "Videojuego", cantidad: 1, precio: 1690, img: "./img/juego-x.webp" },
    { id: 28, nombre: "Pokemon Y", descripcion: "Sexta Generacion", categoria: "Videojuego", cantidad: 1, precio: 1690, img: "./img/juego-y.webp" },
    { id: 29, nombre: "Pokemon Sol", descripcion: "Septima Generacion", categoria: "Videojuego", cantidad: 1, precio: 1700, img: "./img/juego-sol.jpg" },
    { id: 30, nombre: "Pokemon Luna", descripcion: "Septima Generacion", categoria: "Videojuego", cantidad: 1, precio: 1700, img: "./img/juego-luna.webp" },
    { id: 31, nombre: "Pokemon Espada", descripcion: "Octava Generacion", categoria: "Videojuego", cantidad: 1, precio: 1880, img: "./img/juego-rojo.webp" },
    { id: 32, nombre: "Pokemon Escudo", descripcion: "Octava Generacion", categoria: "Videojuego", cantidad: 1, precio: 1880, img: "./img/juego-azul.webp" },
    { id: 33, nombre: "Pokemon Escarlata ", descripcion: "Novena Generacion", categoria: "Videojuego", cantidad: 1, precio: 2100, img: "./img/juego-escarlata.png" },
    { id: 34, nombre: "Pokemon Purpura", descripcion: "Novena Generacion", categoria: "Videojuego", cantidad: 1, precio: 2100, img: "./img/juego-purpura.jpg" },
    { id: 35, nombre: "Pokemon Let's Go Pikachu", descripcion: "Decima Generacion", categoria: "Videojuego", cantidad: 1, precio: 2600, img: "./img/juego-pikachu.jpg" },
    { id: 36, nombre: "Pokemon Let's Go Eevee", descripcion: "Decima Generacion", categoria: "Videojuego", cantidad: 1, precio: 2600, img: "./img/juego-eevee.jpg" },
    //PELICULAS DE POKEMON.
    { id: 37, nombre: "Mewtwo Contraataca", descripcion: "Año: 1999", categoria: "Pelicula", cantidad: 1, precio: 3000, img: "./img/pelicula-mewtwo-contraataca-1999.webp" },
    { id: 38, nombre: "El Poder de uno", descripcion: "Año: 2000", categoria: "Pelicula", cantidad: 1, precio: 2500, img: "./img/pelicula-elpoder-deuno.png" },
    { id: 39, nombre: "El hechizo de los Unown", descripcion: "Año: 2001", categoria: "Pelicula", cantidad: 1, precio: 1200, img: "./img/pelicula-hechizo.png" },
    { id: 40, nombre: "Pokemon x siempre: Celebi, la voz del bosque", descripcion: "Año: 2004", categoria: "Pelicula", cantidad: 1, precio: 4000, img: "./img/pelicula-pokemonxsiempre-celebi-lavozdelbosque.webp" },
    { id: 41, nombre: "Heroes Pokemon: Latios y Latias", descripcion: "Año: 2004", categoria: "Pelicula", cantidad: 1, precio: 2850, img: "./img/pelicula-heroes-pokemon-latios-lattias.jpg" },
    { id: 42, nombre: "Jirachi y los deseos", descripcion: "Año: 2008", categoria: "Pelicula", cantidad: 1, precio: 1556, img: "./img/pelicula-jirachi-y-los-deseos.png" },
    { id: 43, nombre: "El destino de Deoxys", descripcion: "Año: 2008", categoria: "Pelicula", cantidad: 1, precio: 3300, img: "./img/pelicula-el-destino-de-deoxys.webp" },
    { id: 44, nombre: "Lucario y el misterio de Mew", descripcion: "Año: 2008", categoria: "Pelicula", cantidad: 1, precio: 2900, img: "./img/pelicula-lucario-y-el-misterio-de-mew.png" },
    { id: 45, nombre: "Pokemon Ranger y el Templo del Mar", descripcion: "Año: 2009", categoria: "Pelicula", cantidad: 1, precio: 1400, img: "./img/pelicula-pokemon-ranger-y-el-templo-del-mar.jpg" },
    { id: 46, nombre: "El surgimiento de Darkrai", descripcion: "Año: 2010", categoria: "Pelicula", cantidad: 1, precio: 900, img: "./img/pelicula-surgimiento-darkai.webp" },
    { id: 47, nombre: "Giratina y el guerro celestial", descripcion: "Año: 2010", categoria: "Pelicula", cantidad: 1, precio: 1200, img: "./img/pelicula-giratina-y-el-guerrero-celetial.png" },
    { id: 48, nombre: "Arceus y la joya de la vida", descripcion: "Año: 2010", categoria: "Pelicula", cantidad: 1, precio: 2100, img: "./img/pelicula-arceus-y-la-joya-de-la-vida.webp" },
    { id: 50, nombre: "Blanco - Victini y Reshiram", descripcion: "Año: 2012", categoria: "Pelicula", cantidad: 1, precio: 1600, img: "./img/pelicula-blanco-victini.jpg" },
    { id: 51, nombre: "Negro - Victini y Reshiram", descripcion: "Año: 2012", categoria: "Pelicula", cantidad: 1, precio: 1150, img: "./img/pelicula-negro-victini.jpg" },
    { id: 52, nombre: "Kyurem contra el espadachin mistico", descripcion: "Año: 2013", categoria: "Pelicula", cantidad: 1, precio: 980, img: "./img/pelicula-kyurem-contra-el-espadachin-mistico.jpg" },
    { id: 53, nombre: "Genesect y el despertar de una leyenda", descripcion: "Año: 2014", categoria: "Pelicula", cantidad: 1, precio: 2350, img: "./img/pelicula-genesect-y-el-despertar-de-una-leyenda.webp" },
    { id: 54, nombre: "Diance y la crisalida de la destruccion", descripcion: "Año: 2015", categoria: "Pelicula", cantidad: 1, precio: 2000, img: "./img/pelicula-diance-y-la-crisalida-de-la-destruccion.webp" },
    { id: 55, nombre: "Hoopa y un duelo historico", descripcion: "Año: 2016", categoria: "Pelicula", cantidad: 1, precio: 1999, img: "./img/pelicula-hoopa-y-un-duelo-historico.png" },
    { id: 56, nombre: "Volcanion y la maravilla mecanica", descripcion: "Año: 2017", categoria: "Pelicula", cantidad: 1, precio: 3800, img: "./img/pelicula-volcanion-y-la-maravilla-mecanica.webp" },
    { id: 57, nombre: "Pokemon: ¡Yo te elijo!", descripcion: "Año: 2017", categoria: "Pelicula", cantidad: 1, precio: 3950, img: "./img/pelicula-pokemon-yo-te-elijo.jpg" },
    { id: 58, nombre: "La pelicula Pokemon: El poder de todos", descripcion: "Año: 2019", categoria: "Pelicula", cantidad: 1, precio: 3350, img: "./img/pelicula-pokemon-el-poder-de-todos.png" },
    { id: 59, nombre: "Detective Pikachu", descripcion: "Año: 2019", categoria: "Pelicula", cantidad: 1, precio: 6700, img: "./img/pelicula-detective.webp" },
    { id: 60, nombre: "Pokemon: Mewtwo contraataca-Evolucion", descripcion: "Año: 2020", categoria: "Pelicula", cantidad: 1, precio: 4250, img: "./img/pelicula-mewtwo-contraataca-evolucion.jpg" },
    { id: 61, nombre: "La pelicula Pokemon: Los secretos de la selva", descripcion: "Año: 2021", categoria: "Pelicula", cantidad: 1, precio: 5000, img: "./img/pelicula-pokemon-yo-te-elijo.jpg" }
]

const peliculas = [
    { id: 1, nombre: "Oro y Plata", descripcion: "oro y plata", categoria: "Pelicula", cantidad: 1, precio: 10000, img: "./img/juego-oro-plata.jpg" }
]

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorProductos2 = document.getElementById('contenedor-productos2')

const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const precioTotal2 = document.getElementById("precioTotal2")
const cantidadTotal = document.getElementById('cantidadTotal')
const cantidadTotal2 = document.getElementById("cantidadTotal2")


let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();

    Swal.fire({
        title: "¡Vaciaste tu carrito de compras!",
        icon: "success",
        timer: 2500,
        imageUrl: "./img/pikachu-triste.png",
        imagewidth: 300,
        imageheight: 200,
        confirmButtonText: "Cerrar"
    });
});


producto.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <div class="card mb-3" style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
  <div class="card-body">
    <h3 class="card-title text-center">${producto.nombre}</h3>
    <p class="card-text text-center blue">${producto.descripcion}</p>
    <p class="card-text text-center">Categoria: ${producto.categoria}</p>
    <h5 class="card-text text-center mb-4 precioProducto">Precio: $${producto.precio}</h5>
    <button href="#" id="agregar${producto.id}" class="btn btn-danger boton-agregar">Agregar al carrito<i class="fas fa-shopping-cart"></i></button>  
    </div>
</div>
    `

    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)

        Swal.fire({
            title: "¡Perfecto!",
            text: "¡Su producto se agrego al carrito!",
            icon: "success",
            timer: 2000,
            imageUrl: "./img/pikachu-exito.png",
            imagewidth: 300,
            imageheight: 200,
            confirmButtonText: "Cerrar"
        });

    })
})


const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map(prod => {

            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = producto.find((prod) => prod.id === prodId)
        carrito.push(item)
    }

    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
    console.log(carrito)

    Toastify({
        text: "Su producto fue eliminado del carrito.",
        gravity: "top",
        position: "right",
        style: {
            background: getRandomColor(),
            borderRadius: "6px"
        },
        duration: 4500
    }).showToast();
}


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <img src="${prod.img}" class="card-img-top img-carritoo" alt="${prod.nombre}">
        <p class="p-carritoo">${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length

    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    precioTotal2.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio * 1.21, 0)


}

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) => {
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation()

})


//
document.querySelector('.form-select').addEventListener('change', function () {
});

document.querySelector('.form-select').addEventListener('change', function () {
    const selectedValue = this.value;
});

document.querySelector('.form-select').addEventListener('change', function () {
    const selectedValue = this.value;
    const products = producto
    const filteredProducts = products.filter(product => {
        if (selectedValue === '1') {
            return product.categoria === 'Peluche';
        } else if (selectedValue === '2') {
            return product.categoria === 'Videojuego';
        } else if (selectedValue === '3') {
            return product.categoria === 'Pelicula';
        }
    });
    console.log(filteredProducts);
});


//ACA VIENE EL CODIGO DE LA PELEA RANDOM DE POKEMONS
const pokemons = [
    { nombre: "Pikachu", fuerza: 101, defensa: 50, foto: "./img/pelea-pikachu.png" },
    { nombre: "Charmander", fuerza: 80, defensa: 60, foto: "./img/pelea-charmander.png" },
    { nombre: "Squirtle", fuerza: 90, defensa: 70, foto: "./img/pelea-squirtle.png" },
    { nombre: "Latios", fuerza: 110, defensa: 50, foto: "./img/pelea-latios.png" },
    { nombre: "Ponyta", fuerza: 80, defensa: 60, foto: "./img/pelea-ponyta.png" },
    { nombre: "Mew", fuerza: 112, defensa: 70, foto: "./img/pelea-mew.png" },
    { nombre: "Minccico", fuerza: 95, defensa: 70, foto: "./img/pelea-lunala.png" },
    { nombre: "Quilava", fuerza: 80, defensa: 55, foto: "./img/pelea-quilava.png" },
    { nombre: "Scorbunny", fuerza: 89, defensa: 46, foto: "./img/pelea-scorbunny.png" },
    { nombre: "Servine", fuerza: 120, defensa: 85, foto: "./img/pelea-servine.png" }
];

function seleccionarPokemons() {
    const indice1 = Math.floor(Math.random() * pokemons.length);
    let indice2 = Math.floor(Math.random() * pokemons.length);
    while (indice1 === indice2) {
        indice2 = Math.floor(Math.random() * pokemons.length);
    }
    return [pokemons[indice1], pokemons[indice2]];
}

function pelear(pokemon1, pokemon2) {
    const ganadorAleatorio = Math.floor(Math.random() * 2);
    return (ganadorAleatorio === 0) ? pokemon1 : pokemon2;
}



function mostrarResultado(pokemon1, pokemon2, ganador) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
    <h1 class="text-center mb-4 mt-4"  id="titulo-pelea" style="color: #0101DF">Peleas de Pokemons</h1>
    <p class="offset-3 col-6 texto-fight" style="color: blueviolet; font-weight: 600; font-size: 20px;">Bienvenidos a la arena de peleas de pokemons! En esta ocasión, dos de nuestros valientes participantes serán seleccionados al azar para enfrentarse en una emocionante batalla. ¡Pero no se basará en su fuerza o defensa, sino en su suerte! Cualquiera de los dos puede resultar como el ganador en cualquier momento.
    </p>
      <h2 class="text-center mb-4">Pelea entre <span style="color: green">${pokemon1.nombre}</span> y <span style="color: red">${pokemon2.nombre}</span></h2>
      <p class="text-center text-white" style="background-image: url(https://images.alphacoders.com/507/507384.jpg); background-size: cover;">
        <img  src="${pokemon1.foto}" alt="${pokemon1.nombre}" style="width: 250px; height: 250px">
        VS
        <img  src="${pokemon2.foto}" alt="${pokemon2.nombre}" style="width: 250px; height: 250px">
      </p>
      <p class="offset-4 col-6 texto-fight" style="color: blueviolet; font-weight: 600; font-size: 20px;">Después de una intensa batalla, el ganador es...</p>
      <h3 class="text-center mb-3 mt-4">Ganador: <span class="text-black bg-danger">${ganador.nombre}</span></h3>
        <div id="img-ganador" style="background-image: url(https://i.pinimg.com/736x/d6/7c/3c/d67c3cbce4d7e9355e8522e10434d76c.jpg); background-size: cover; width: 1170px; height: 625px; display: flex; align-items: center; justify-content: center;">
    <div style="background-image: url(https://pbs.twimg.com/media/DKWuisGUIAA46ec.png); background-size: cover; width: 500px; height: 500px; display: flex; align-items: center; justify-content: center;">
      <img src="${ganador.foto}" alt="${ganador.nombre}" style="width: 250px;">
    </div>
  </div>
  <p class="offset-3 col-6 texto-fight" style="color: blueviolet; font-weight: 600; font-size: 20px">¿Queres presenciar otra pelea aleatoria? ¡Cliquea en el botón "Pelear otra vez"!</p>
  </div>
    `;
}

const [pokemon1, pokemon2] = seleccionarPokemons();
const ganador = pelear(pokemon1, pokemon2);
mostrarResultado(pokemon1, pokemon2, ganador);

//ACA ESTA EL CODIGO FUNCIONAL Y ESTILIZADO DEL BOTON PARA DESLIZARSE PARA DESLIZARSE HACIA ABAJO.
function refresh() {
    const [pokemon1, pokemon2] = seleccionarPokemons();
    const ganador = pelear(pokemon1, pokemon2);
    mostrarResultado(pokemon1, pokemon2, ganador);
}

const botonParaRefrescar = document.createElement("button");
botonParaRefrescar.innerHTML = "Refresh";
botonParaRefrescar.style.display = "block";
botonParaRefrescar.style.marginLeft = "auto";
botonParaRefrescar.style.marginRight = "auto";
botonParaRefrescar.style.marginTop = "6px";
botonParaRefrescar.style.marginBottom = "10px"
botonParaRefrescar.style.backgroundColor = "blue";
botonParaRefrescar.style.color = "white";
botonParaRefrescar.style.padding = "10px 20px";
botonParaRefrescar.style.borderRadius = "10px";
botonParaRefrescar.style.border = "2px solid red";

botonParaRefrescar.innerHTML = "Refresh";
botonParaRefrescar.addEventListener("click", function () {
    location.reload();
});
botonParaRefrescar.innerHTML = "Refresh";
botonParaRefrescar.style.marginTop = "6px";
botonParaRefrescar.style.marginBottom = "4px"
botonParaRefrescar.style.backgroundColor = "blue";
botonParaRefrescar.style.color = "white";
botonParaRefrescar.style.padding = "10px 20px";
botonParaRefrescar.style.borderRadius = "10px";
botonParaRefrescar.style.border = "2px solid red";


botonParaRefrescar.innerHTML = "¡Generar otra pelea!";
botonParaRefrescar.addEventListener("click", function () {
    location.reload();
});
resultado.appendChild(botonParaRefrescar);

//BOTON QUE DESLIZA HACIA ARRIBA
const scrollBtn = document.querySelector("#scrollBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
//BOTON QUE DESLIZA HACIA ABAJO
document.getElementById("scroll-down-button").addEventListener("click", function() {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
  });
// FIN DE LA 3ERA PRE-ENTREGA DE JAVASCRIPT DE; LUCAS CABRAL.


