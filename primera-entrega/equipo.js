// Creamos el array equipo 

const equipo = [];

const slots = document.querySelectorAll(".slot");

//Desarrollamos la funcion para poder operar con el array equipo y agregar pokemones

function agregarPokemon(nombre, imagen) {

    if (equipo.length >= 6) {
        alert("Tu equipo ya tiene 6 Pokemon");
        return;
    }

    const repetido = equipo.some(function(pokemon) {
        return pokemon.nombre === nombre;
    });

    if (repetido) {
        alert("Ese Pokemon ya esta en tu equipo");
        return;
    }

    equipo.push({
        nombre: nombre,
        imagen: imagen
    });

    actualizarEquipo();
}

//Funcion para mostrar y manejar el equipo en pantalla

function actualizarEquipo() {

    slots.forEach(function(slot, posicion) {

        if (equipo[posicion]) {

            slot.innerHTML = `
        <img src="${equipo[posicion].imagen}" alt="${equipo[posicion].nombre}">
        <h3>${equipo[posicion].nombre}</h3>
        <button onclick="quitarPokemon(${posicion})">Quitar</button>
        `;

        } else {

            slot.innerHTML = "Slot vacio";

        }

    });

}

//Creamos la funcion para sacar pokemones del equipo a eleccion

function quitarPokemon(posicion) {

    equipo.splice(posicion, 1);

    actualizarEquipo();
}