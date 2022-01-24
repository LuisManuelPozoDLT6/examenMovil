const videogames = [
    {
        id: 1,
        url: "https://static-cdn.jtvnw.net/ttv-boxart/504461_IGDB-272x380.jpg",
        name: "Super smash bros",
        description: "Un auténtico duelo de titanes de los videojuegos que podrás jugar donde, cuando y como quieras!",
        precio: 1049
    },
    {
        id: 2,
        url: "https://m.media-amazon.com/images/I/61wcjVPx4sL._AC_SX466_.jpg",
        name: "Zelda",
        description: "Sumérgete en un mundo de aventuras, exploración y descubrimientos en The Legend of Zelda!",
        precio: 1218
    },
    {
        id: 3,
        url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2012/05/164445-desvelada-portada-halo-4.jpg?itok=Bk78Ljh9",
        name: "Halo",
        description: "Nuevos reclutas y Spartans veteranos: conoce Halo Infinite, descubre nuevos complementos",
        precio: 1499
    },
    {
        id: 4,
        url: "https://uvejuegos.com/img/caratulas/61279/Super-Mario-Party-EU.jpg",
        name: "Mario party",
        description: "Conviértete en una superestrella en el modo Mario Party, un juego de tablero repleto de diversión en el que tu suerte puede cambiar de un momento a otro",
        precio: 1290
    },
    {
        id: 5,
        url: "https://uvejuegos.com/img/caratulas/17550/Sonic_The_Hedgehog_eeuu_.jpg",
        name: "Sonic",
        description: "Sonic Dash es el original e interminable juego de carreras de Sonic the Hedgehog de SEGA! Corre, salta y acelera a través de impresionantes entornos 3D",
        precio: 750
    },
    {
        id: 6,
        url: "https://static.posters.cz/image/750/posters/pac-man-maze-i102456.jpg",
        name: "Pac-man",
        description: "¡Llega el modo historia a PAC-MAN! Emprende un emocionante viaje y diviértete con varios diseños de laberinto con nuevos obstáculos y potenciadores",
        precio: 564
    },
    {
        id: 7,
        url: "https://img.clasf.mx/2019/06/29/Minecraft-Juego-Xbox-360-20190629132012.0183820015.jpg",
        name: "Minecraft",
        description: "¡Explora tu propio mundo único, sobrevive a la noche y crea todo lo que puedas imaginar!",
        precio: 1863
    },
    {
        id: 8,
        url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2017/02/mario-kart-8-deluxe-caratula.jpg?itok=WaieT7pH",
        name: "Mario kart",
        description: "Con cinco tipos de batalla, tendrás aún más formas de superar a tus contrincantes",
        precio: 1500
    }
];


const videoGame = (i) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(videogames[i]);
        }, 1000);
    })
}

async function getVideoGames() {
    let info="";
    for (let i = 0; i < videogames.length; i++) {
        var videojuego = await videoGame(i);
        let imagen = videojuego.url;
        let nombre = videojuego.name;
        let desc = videojuego.description;
        let price = videojuego.precio;
        info +=
            `<div class="col-3">
            <img src="${imagen}" class="card-img-top size text-center " onclick="precio(${price})" alt="...">
                <h3 class="card-title text-center">${nombre}</h3>
                <p class="card-text text-center">${desc}</p>
            </div>`;
        document.getElementById('videogames').innerHTML = `${info}`;
    }

}

function precio (precio) {
    window.alert(`El precio de este videojuego es de: $${precio}`);
}