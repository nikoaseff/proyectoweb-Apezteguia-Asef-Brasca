//Creamos el array de la pokedex, inicialmente con 20 pokemones, con su nro de pokedex, nombre, tipo y su imagen

const pokemones = [
    {
        id: 1,
        nombre: "Bulbasaur",
        tipo: "Planta",
        imagen: "img/bulbasaur.png"
    },

    {
        id:2,
        nombre:"Ivysaur",
        tipo:"Planta",
        imagen:"img/ivysaur.png"
    },

    {
        id:3,
        nombre:"Venusaur",
        tipo:"Planta",
        imagen:"img/venusaur.png"
    },

    {
        id: 4,
        nombre: "Charmander",
        tipo: "Fuego",
        imagen: "img/charmander.png"
    },

    {
        id: 5,
        nombre: "Charmeleon",
        tipo: "Fuego",
        imagen: "img/charmeleon.png"
    },

    {
        id: 6,
        nombre: "Charizard",
        tipo: "Fuego",
        imagen: "img/charizard.png"
    },

    {
        id: 7,
        nombre: "Squirtle",
        tipo: "Agua",
        imagen: "img/squirtle.png"
    },

    {
        id: 8,
        nombre: "Wartortle",
        tipo: "Agua",
        imagen: "img/wartortle.png"
    },

    {
        id: 9,
        nombre: "Blastoise",
        tipo: "Agua",
        imagen: "img/blastoise.png"
    },

    {
        id: 12,
        nombre: "Butterfree",
        tipo: "Bicho",
        imagen: "img/butterfree.png"
    },

    {
        id: 18,
        nombre: "Pidgeot",
        tipo: "Normal",
        imagen: "img/pidgeot.png"
    },

    {
        id: 25,
        nombre: "Pikachu",
        tipo: "Electrico",
        imagen: "img/pikachu.png"
    },

    {
        id: 26,
        nombre: "Raichu",
        tipo: "Electrico",
        imagen: "img/raichu.png"
    },

    {
        id: 34,
        nombre: "Nidoking",
        tipo: "Veneno",
        imagen: "img/nidoking.png"
    },

    {
        id: 35,
        nombre: "Clefairy",
        tipo: "Hada",
        imagen: "img/clefairy.png"
    },

    {
        id: 37,
        nombre: "Vulpix",
        tipo: "Fuego",
        imagen: "img/vulpix.png"
    },

    {
        id: 39,
        nombre: "Jigglypuff",
        tipo: "Normal",
        imagen: "img/jigglypuff.png"
    },

    {
        id: 54,
        nombre: "Psyduck",
        tipo: "Agua",
        imagen: "img/psyduck.png"
    },

    {
        id: 66,
        nombre: "Machop",
        tipo: "Lucha",
        imagen: "img/machop.png"
    },

    {
        id: 94,
        nombre: "Gengar",
        tipo: "Fantasma",
        imagen: "img/gengar.png"
    },
];


const listaPokemon = document.getElementById("listaPokemon");
const buscarPokemon = document.getElementById("buscarPokemon");


function mostrarPokemones(lista) {

    listaPokemon.innerHTML = "";

    lista.forEach(function(pokemon) {

        listaPokemon.innerHTML += `
            <div class="pokemon-card">

                <p>#${pokemon.id}</p>

                <img src="${pokemon.imagen}" alt="${pokemon.nombre}">

                <h3>${pokemon.nombre}</h3>

                <p>${pokemon.tipo}</p>

            </div>
        `;

    });

}

//Funcion para mostrar pokemon y sus datos segun la busqueda

buscarPokemon.addEventListener("input", function() {

    const texto = buscarPokemon.value.toLowerCase();

    const filtrados = pokemones.filter(function(pokemon) {

        return pokemon.nombre.toLowerCase().includes(texto);

    });

    mostrarPokemones(filtrados);

});


mostrarPokemones(pokemones);