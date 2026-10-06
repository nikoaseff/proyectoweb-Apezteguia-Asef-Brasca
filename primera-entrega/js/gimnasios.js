//Creamos el array de los gimnasios conteniendo una descripcion

const gimnasios = [
    {
        lider:"Brock",
        ciudad: "Ciudad Plateada",
        tipo: "Roca",
        pokemon: "Geodude y Onix"
    },

    {
        lider:"Misty",
        ciudad: "Ciudad Celeste",
        tipo: "Agua",
        pokemon: "Staryu y Starmie"
    },

    {
        lider:"Lt. Surge",
        ciudad: "Ciudad Carmín",
        tipo: "Eléctrico",
        pokemon: "Voltorb, Pikachu y Raichu"
    },

    {
        lider:"Erika",
        ciudad: "Ciudad Azulona",
        tipo: "Planta",
        pokemon: "Victreebel, Tangela y Vileplume"
    },

    {
        lider: "Koga",
        ciudad: "Ciudad Fucsia",
        tipo: "Veneno",
        pokemon: "Koffing, Muk y Weezing"
    },

    {
        lider: "Sabrina",
        ciudad: "Ciudad Azafrán",
        tipo: "Psíquico",
        pokemon: "Kadabra, Mr. Mime, Venomoth y Alakazam"
    },

    {
        lider: "Blaine",
        ciudad: "Isla Canela",
        tipo: "Fuego",
        pokemon: "Growlithe, Ponyta, Rapidash y Arcanine"
    },

    {
        lider: "Giovanni",
        ciudad: "Ciudad Verde",
        tipo: "Tierra",
        pokemon: "Rhyhorn, Dugtrio, Nidoqueen y Nidoking"
    }
];

const infoGimnasio = document.getElementById("infoGimnasio");

/**
 * Muestra los datos de la opción seleccionada.
 * @method mostrarGimnasio
 * @param {number} numero - Posición de la opción en el array.
 * @returns {void}
 */
const mostrarGimnasio = (numero) => {
    if (!Number.isInteger(numero) || numero < 0 || numero >= gimnasios.length) return;
    const gimnasio = gimnasios[numero];
    infoGimnasio.innerHTML = `<h2>${gimnasio.lider}</h2>
        <p>Ciudad: ${gimnasio.ciudad}</p>
        <p>Tipo: ${gimnasio.tipo}</p>
        <p>Pokémon: ${gimnasio.pokemon}</p>`;
};

mostrarGimnasio(0);
