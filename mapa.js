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

//Funcion para mostrar la ciudad con su descripcion en pantalla

function mostrarCiudad(numero) {

    const ciudad = ciudades[numero];

    infoCiudad.innerHTML = `
        <h2>${ciudad.nombre}</h2>

        <p>${ciudad.descripcion}</p>
    `;
}