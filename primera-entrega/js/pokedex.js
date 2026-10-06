//Creamos el array de la pokedex, inicialmente con 20 pokemones, con su nro de pokedex, nombre, tipo y su imagen

const pokemones = [
    {
        id: 1,
        nombre: "Bulbasaur",
        tipo: "Planta",
        imagen: "imagenes/bulbasaur.png"
    },

    {
        id:2,
        nombre:"Ivysaur",
        tipo:"Planta",
        imagen:"imagenes/ivysaur.png"
    },

    {
        id:3,
        nombre:"Venusaur",
        tipo:"Planta",
        imagen:"imagenes/venusaur.png"
    },

    {
        id: 4,
        nombre: "Charmander",
        tipo: "Fuego",
        imagen: "imagenes/charmander.png"
    },

    {
        id: 5,
        nombre: "Charmeleon",
        tipo: "Fuego",
        imagen: "imagenes/charmeleon.png"
    },

    {
        id: 6,
        nombre: "Charizard",
        tipo: "Fuego",
        imagen: "imagenes/charizard.png"
    },

    {
        id: 7,
        nombre: "Squirtle",
        tipo: "Agua",
        imagen: "imagenes/squirtle.png"
    },

    {
        id: 8,
        nombre: "Wartortle",
        tipo: "Agua",
        imagen: "imagenes/wartortle.png"
    },

    {
        id: 9,
        nombre: "Blastoise",
        tipo: "Agua",
        imagen: "imagenes/blastoise.png"
    },

    {
        id: 12,
        nombre: "Butterfree",
        tipo: "Bicho",
        imagen: "imagenes/butterfree.png"
    },

    {
        id: 18,
        nombre: "Pidgeot",
        tipo: "Normal",
        imagen: "imagenes/pidgeot.png"
    },

    {
        id: 25,
        nombre: "Pikachu",
        tipo: "Eléctrico",
        imagen: "imagenes/pikachu.png"
    },

    {
        id: 26,
        nombre: "Raichu",
        tipo: "Eléctrico",
        imagen: "imagenes/raichu.png"
    },

    {
        id: 34,
        nombre: "Nidoking",
        tipo: "Veneno",
        imagen: "imagenes/nidoking.png"
    },

    {
        id: 35,
        nombre: "Clefairy",
        tipo: "Hada",
        imagen: "imagenes/clefairy.png"
    },

    {
        id: 37,
        nombre: "Vulpix",
        tipo: "Fuego",
        imagen: "imagenes/vulpix.png"
    },

    {
        id: 39,
        nombre: "Jigglypuff",
        tipo: "Normal",
        imagen: "imagenes/jigglypuff.png"
    },

    {
        id: 54,
        nombre: "Psyduck",
        tipo: "Agua",
        imagen: "imagenes/psyduck.png"
    },

    {
        id: 66,
        nombre: "Machop",
        tipo: "Lucha",
        imagen: "imagenes/machop.png"
    },

    {
        id: 94,
        nombre: "Gengar",
        tipo: "Fantasma",
        imagen: "imagenes/gengar.png"
    },
];


const listaPokemon = document.getElementById("listaPokemon");
const buscarPokemon = document.getElementById("buscarPokemon");

/**
 * Dibuja las tarjetas de la lista recibida y anuncia la cantidad encontrada.
 * @method mostrarPokemones
 * @param {Array<Object>} lista - Pokémon que se mostrarán.
 * @returns {void}
 */
const mostrarPokemones = (lista) => {
    let contenido = "";
    for (const pokemon of lista) {
        contenido += `
            <div class="pokemon-card">
                <p>#${pokemon.id}</p>
                <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
                <h3>${pokemon.nombre}</h3>
                <p>${pokemon.tipo}</p>
            </div>
        `;
    }
    listaPokemon.innerHTML = contenido;
    document.getElementById("estadoBusqueda").textContent = lista.length === 0
        ? "No se encontraron Pokémon con ese nombre. Probá otra búsqueda."
        : `${lista.length} Pokémon encontrados.`;
};

/**
 * Selecciona los nombres que contienen la búsqueda, sin distinguir mayúsculas.
 * @method buscar
 * @returns {void}
 */
const buscar = () => {
    const texto = buscarPokemon.value.trim().toLowerCase();
    const filtrados = [];
    for (const pokemon of pokemones) {
        if (pokemon.nombre.toLowerCase().indexOf(texto) !== -1) {
            filtrados.push(pokemon);
        }
    }
    mostrarPokemones(filtrados);
};

mostrarPokemones(pokemones);
