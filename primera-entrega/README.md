# KantoDex

**Proyecto de Taller de Desarrollo Web — primera entrega.**

## Índice

- [Autores](#autores)
- [El proyecto](#el-proyecto)
- [Páginas](#páginas)
- [Tecnologías](#tecnologías)
- [Cómo abrirlo](#cómo-abrirlo)
- [Cómo funciona](#cómo-funciona)
- [Organización](#organización)
- [Bocetos y wireframes](#bocetos-y-wireframes)
- [Publicación](#publicación)

## Autores

- Asef: [nikoaseff](https://github.com/nikoaseff)
- Brasca: [AlitoBrasca](https://github.com/AlitoBrasca)
- Apezteguia: [Aleapx](https://github.com/Aleapx)

## El proyecto

KantoDex es una web sobre Pokémon de la región de Kanto. Se pueden buscar Pokémon, consultar ciudades y gimnasios, armar un equipo y calcular la experiencia de un entrenamiento.

## Páginas

| Página | Qué incluye |
| --- | --- |
| [Inicio](primera-entrega/index.html) | Presentación y accesos a las secciones. |
| [Pokédex](primera-entrega/pokedex.html) | Una selección de veinte Pokémon con búsqueda por nombre. |
| [Gimnasios](primera-entrega/gimnasios.html) | Información de ocho líderes de gimnasio. |
| [Mapa](primera-entrega/mapa.html) | Mapa de Kanto e información de cinco ciudades. |
| [Mi equipo](primera-entrega/equipo.html) | Diez Pokémon para elegir, un equipo de hasta seis y una calculadora de experiencia. |

## Tecnologías

- **HTML:** estructura de las páginas, navegación y formularios.
- **CSS:** colores, distribución y adaptación a distintos tamaños de pantalla.
- **JavaScript:** buscador, selección de información, equipo y calculadora.
- **localStorage y JSON:** guardado del equipo en el navegador.
- **Google Fonts:** fuente Nunito para el nombre del sitio.

## Cómo abrirlo

1. Descargar o clonar el repositorio.
2. Abrir la carpeta `primera-entrega` en Visual Studio Code.
3. Abrir `index.html` con la extensión Live Server.
4. Recorrer las secciones desde el menú.

No hace falta instalar paquetes npm ni compilar el proyecto. Para recuperar el equipo guardado hay que usar el mismo navegador, dirección y puerto. La fuente de Google Fonts necesita internet; si no carga, se usa Arial.

## Cómo funciona

### Buscador de Pokémon

Permite buscar por el nombre completo o por una parte. Ignora las mayúsculas y los espacios al principio o al final. Si el campo está vacío, muestra todos los Pokémon. Si no encuentra coincidencias, aparece un mensaje. Los tipos están simplificados a uno por Pokémon.

### Mi equipo

Se pueden agregar hasta seis Pokémon, sin repetirlos, y quitar cualquiera. El equipo se guarda en `localStorage`, por lo que se conserva al recargar la página. Si los datos guardados no se pueden recuperar, aparece un aviso.

### Calculadora de experiencia

Multiplica la experiencia por combate por la cantidad de combates. Por ejemplo: **350 puntos × 10 combates = 3500 puntos**.

La experiencia debe ser un número entero entre 1 y 100000, y los combates entre 1 y 1000. Si un dato no es válido, se muestra un aviso y se vacía ese campo para corregirlo. Es un cálculo sencillo con experiencia constante por combate.

## Organización

```text
primera-entrega/
├── index.html
├── pokedex.html
├── gimnasios.html
├── mapa.html
├── equipo.html
├── Css/
│   └── style.css
├── Js/
│   ├── pokedex.js
│   ├── gimnasios.js
│   ├── mapa.js
│   └── equipo.js
├── Imagenes/
├── Boceto Dibujo/
├── Wireframe/
├── README.md
└── Requerimientos.md
```

## Bocetos y wireframes

- [Bocetos en papel](primera-entrega/Boceto%20Dibujo/): dibujos de las cinco páginas en computadora y celular.
- [Wireframes](primera-entrega/Wireframe/README.md): versiones digitales basadas en esos dibujos, con la distribución de cada página y los mensajes de error.
- [Consigna y requisitos](primera-entrega/Requerimientos.md): requisitos de la primera entrega.

## Publicación

[Repositorio en GitHub](https://github.com/nikoaseff/proyectoweb-Apezteguia-Asef-Brasca).

El sitio todavía no está publicado en GitHub Pages. El enlace a la web se agregará cuando esté publicado.
