function mensaje() {
    alert("Aúpa Atleti");
}

function cambiarJugador() {
    let nombres = document.querySelectorAll(".tarjeta h3");
    let imagenes = document.querySelectorAll(".tarjeta img");

    let listaNombres = ["Godín", "Gabi", "Torres"]
    let listaImagenes = [
       "https://img-estaticos.atleticodemadrid.com/system/fotos/6996/destacado_600x600/GOD%C3%8DN.png?1534246438",
       "https://img-estaticos.atleticodemadrid.com/system/fotos/5879/destacado_600x600/14_gabi.png?1501081738",
       "https://img-estaticos.atleticodemadrid.com/system/fotos/5893/destacado_600x600/09_f_torres.png?1501082206"
    ];

    nombres.forEach(function(nombre, i) {
        nombre.textContent = listaNombres[i];
    });

    imagenes.forEach(function(img, i) {
        img.src = listaImagenes[i];
    });

}

function ocultar() {
    let seccion = document.getElementById("jugadores");

    if (seccion.style.display === "none") {
        seccion.style.display = "block";
    } else {
        seccion.style.display = "none";
    }
}

function cambiarColor() {
    let colores = ["#c8102e", "#0033a0", "#ffffff"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

let jugadores = [
    {
        nombre: "Griezmann",
        img: "https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250019498.webp",
        posicion: "Delantero"
    },
    {
        nombre: "Oblak",
        img: "https://img-estaticos.atleticodemadrid.com/system/fotos/5883/destacado_600x600/13_oblak.png?1501081959",
        posicion: "Portero"
    },
    {
        nombre: "Koke",
        img: "https://img-estaticos.atleticodemadrid.com/system/fotos/18069/destacado_600x600/koke.png?1754735208",
        posicion: "centrocampista"
    }
];

function siguiente(boton) {
    let tarjeta = boton.parentElement;

    let nombre = tarjeta.querySelector(".jugador-nombre");
    let img = tarjeta.querySelector(".jugador-img");
    let posicion = tarjeta.querySelector(".jugador-posicion");

    let indice = tarjeta.getAttribute("data-indice") || 0;
    indice++;

    if (indice >= jugadores.length) indice = 0;

    tarjeta.setAttribute("data-indice", indice);

    tarjeta.classList.add("salida");

    setTimeout(function() {
        nombre.textContent = jugadores[indice].nombre;
        img.src = jugadores[indice].img;
        posicion.textContent = jugadores[indice].posicion;

        tarjeta.classList.remove("salida");
        tarjeta.classList.add("entrada");

        setTimeout(function () {
            tarjeta.classList.remove("entrada");
        }, 50);

    }, 200);
}

function anterior(boton) {
    let tarjeta = boton.parentElement;

    let nombre = tarjeta.querySelector(".jugador-nombre");
    let img = tarjeta.querySelector(".jugador-img");
    let posicion = tarjeta.querySelector(".jugador-posicion");

    let indice = tarjeta.getAttribute("data-indice") || 0;
    indice--;

    if (indice < 0) indice = jugadores.length - 1;

    tarjeta.setAttribute("data-indice", indice);

    tarjeta.classList.add("entrada");

    setTimeout(function() {
        nombre.textContent = jugadores[indice].nombre;
        img.src = jugadores[indice].img;
        posicion.textContent = jugadores[indice].posicion;

        tarjeta.classList.remove("entrada");
        tarjeta.classList.add("salida");

        setTimeout(function () {
        tarjeta.classList.remove("salida");
        }, 50);

    }, 200);
}

function actualizar() {
    document.getElementById("jugador-nombre").textContent = jugadores[indice].nombre;
    document.getElementById("jugador-img").src = jugadores[indice].img;
    document.getElementById("jugador-posicion").textContent = jugadores[indice].posicion;
}