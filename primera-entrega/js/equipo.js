let equipo = [];
const slots = document.querySelectorAll(".slot");
const nombresDisponibles = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Pikachu", "Raichu", "Gengar"];

/**
 * Guarda el equipo actual. Avisa si el navegador no permite guardarlo.
 * @method guardarEquipo
 * @returns {void}
 */
const guardarEquipo = () => {
    try {
        localStorage.setItem("equipo", JSON.stringify(equipo));
    } catch {
        alert("No se pudo guardar el equipo. Podés seguir usándolo, pero no se conservará al recargar.");
    }
};

/**
 * Recupera un equipo válido y reconstruye sus rutas de imágenes.
 * @method cargarEquipo
 * @returns {void}
 */
const cargarEquipo = () => {
    equipo = [];
    try {
        const guardado = localStorage.getItem("equipo");
        if (guardado === null) {
            actualizarEquipo();
            return;
        }
        const datos = JSON.parse(guardado);
        if (!Array.isArray(datos) || datos.length > 6) {
            throw new Error("Equipo inválido");
        }
        const nombres = [];
        for (const pokemon of datos) {
            if (!pokemon || !nombresDisponibles.includes(pokemon.nombre) || nombres.includes(pokemon.nombre)) {
                throw new Error("Pokémon inválido o repetido");
            }
            nombres.push(pokemon.nombre);
            equipo.push({nombre: pokemon.nombre, imagen: "imagenes/" + pokemon.nombre.toLowerCase() + ".png"});
        }
    } catch {
        equipo = [];
        alert("No se pudo recuperar el equipo guardado. Podés armar uno nuevo.");
    }
    actualizarEquipo();
};

/**
 * Agrega un Pokémon disponible, sin duplicados y hasta un máximo de seis.
 * @method agregarPokemon
 * @param {string} nombre - Nombre elegido desde un botón de la página.
 * @returns {void}
 */
const agregarPokemon = (nombre) => {
    if (!nombresDisponibles.includes(nombre)) {
        alert("Elegí un Pokémon de la lista.");
        return;
    }
    for (const pokemon of equipo) {
        if (pokemon.nombre === nombre) {
            alert("Ese Pokémon ya está en tu equipo.");
            return;
        }
    }
    if (equipo.length >= 6) {
        alert("Tu equipo ya tiene seis Pokémon. Quitá uno para agregar otro.");
        return;
    }
    equipo.push({nombre: nombre, imagen: "imagenes/" + nombre.toLowerCase() + ".png"});
    guardarEquipo();
    actualizarEquipo();
};

/**
 * Dibuja los integrantes y los espacios libres del equipo.
 * @method actualizarEquipo
 * @returns {void}
 */
const actualizarEquipo = () => {
    for (let posicion = 0; posicion < slots.length; posicion++) {
        if (equipo[posicion]) {
            const pokemon = equipo[posicion];
            slots[posicion].innerHTML = `
                <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
                <h3>${pokemon.nombre}</h3>
                <button type="button" onclick="quitarPokemon(${posicion})" aria-label="Quitar a ${pokemon.nombre}">Quitar</button>
            `;
        } else {
            slots[posicion].textContent = "Espacio vacío";
        }
    }
    document.getElementById("cantidadEquipo").textContent = `${equipo.length} de 6 Pokémon seleccionados`;
};

/**
 * Elimina un integrante por su posición y guarda el cambio.
 * @method quitarPokemon
 * @param {number} posicion - Índice del integrante que se quiere quitar.
 * @returns {void}
 */
const quitarPokemon = (posicion) => {
    if (!Number.isInteger(posicion) || posicion < 0 || posicion >= equipo.length) {
        return;
    }
    equipo.splice(posicion, 1);
    guardarEquipo();
    actualizarEquipo();
};

/**
 * Comprueba que un campo contenga un entero entre uno y su máximo.
 * Si es inválido, informa el error, limpia el campo y devuelve el foco.
 * @method validarEntero
 * @param {HTMLInputElement} campo - Campo que se debe validar.
 * @param {string} nombre - Nombre del dato para el mensaje de error.
 * @param {number} maximo - Mayor valor permitido.
 * @returns {boolean} Indica si el valor es válido.
 */
const validarEntero = (campo, nombre, maximo) => {
    const texto = campo.value.trim();
    const numero = Number(texto);
    if (texto === "" || !Number.isInteger(numero) || numero < 1 || numero > maximo) {
        const mensaje = `${nombre}: ingresá un número entero entre 1 y ${maximo}.`;
        document.getElementById("errorCalculo").textContent = mensaje;
        campo.setAttribute("aria-invalid", "true");
        alert(mensaje);
        campo.value = "";
        campo.focus();
        return false;
    }
    campo.removeAttribute("aria-invalid");
    return true;
};

/**
 * Multiplica la experiencia por combate por la cantidad de combates.
 * @method calcularExperiencia
 * @param {Event} evento - Envío del formulario que se debe mantener en la página.
 * @returns {void}
 */
const calcularExperiencia = (evento) => {
    evento.preventDefault();
    const experiencia = document.getElementById("experienciaCombate");
    const combates = document.getElementById("cantidadCombates");
    const resultado = document.getElementById("resultadoExperiencia");
    resultado.textContent = "";
    document.getElementById("errorCalculo").textContent = "";
    experiencia.removeAttribute("aria-invalid");
    combates.removeAttribute("aria-invalid");
    if (!validarEntero(experiencia, "Experiencia por combate", 100000)) return;
    if (!validarEntero(combates, "Cantidad de combates", 1000)) return;
    const total = Number(experiencia.value) * Number(combates.value);
    resultado.textContent = `Experiencia total estimada: ${total} puntos.`;
};
