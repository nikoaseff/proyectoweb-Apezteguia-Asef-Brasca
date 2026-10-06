//Creamos el array de las ciudades del mapa con su respectiva descripcion

const ciudades = [
    {
        nombre: "Pueblo Paleta",
        descripcion: "Pueblo inicial de la aventura."
    },

    {
        nombre: "Ciudad Verde",
        descripcion: "Ciudad importante de Kanto donde se encuentra el gimnasio de Giovanni."
    },

    {
        nombre: "Ciudad Plateada",
        descripcion: "Ciudad donde se encuentra el gimnasio de Brock."
    },

    {
        nombre: "Ciudad Celeste",
        descripcion: "Ciudad donde se encuentra el gimnasio de Misty."
    },

    {
        nombre: "Ciudad Carmín",
        descripcion: "Ciudad donde se encuentra el gimnasio de Lt. Surge."
    }
];

const infoCiudad = document.getElementById("infoCiudad");

/**
 * Muestra los datos de la opción seleccionada.
 * @method mostrarCiudad
 * @param {number} numero - Posición de la opción en el array.
 * @returns {void}
 */
const mostrarCiudad = (numero) => {
    if (!Number.isInteger(numero) || numero < 0 || numero >= ciudades.length) return;
    const ciudad = ciudades[numero];
    infoCiudad.innerHTML = `<h2>${ciudad.nombre}</h2>
        <p>${ciudad.descripcion}</p>`;
};

mostrarCiudad(0);
