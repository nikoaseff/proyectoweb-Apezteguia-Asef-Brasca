const equipo = [];

const slots = document.querySelectorAll(".slot");


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

function quitarPokemon(posicion) {

    equipo.splice(posicion, 1);

    actualizarEquipo();
}