/*
Ejercicio 5: Catálogo Musical

Imagina que estás creando un sistema de gestión para un catálogo musical. Cada canción tiene las siguientes propiedades:
Nombre de la Canción Género
Duración (en minutos)

Implementa un programa que permita realizar las siguientes operaciones:

Agregar Canción: Permite al usuario ingresar información sobre una nueva canción y agrégala al catálogo.

Listar Canciones: Muestra en la consola la información detallada de todas las canciones en el catálogo. Si el catálogo está vacío, imprime un mensaje indicando que no hay canciones.

Buscar Canciones por Género: Pide al usuario que ingrese un género y muestra en la consola todas las canciones de ese género.

Calcular Promedio de Duración: Calcula y muestra en la consola el promedio de la duración de todas las canciones en el catálogo. (opcional)

Estructura Sugerida:

function crearCatalogo() {

// ... return {
agregarCancion: agregarCancion, listarCanciones: listarCanciones, buscarPorGenero: buscarPorGenero,
calcularPromedioDuracion: calcularPromedioDuracion

};

}

let miCatalogo = crearCatalogo();

// …
*/

const catalogo = [];

const agregarCancion = () => {
    const nombre = prompt("Ingrese el nombre de la canción:");
    const genero = prompt("Ingrese el género de la canción:");
    const duracion = parseFloat(prompt("Ingrese la duración de la canción en minutos:"));

    if (!isNaN(duracion)) {
        const cancion = {
            nombre: nombre,
            genero: genero,
            duracion: duracion,
        };
        catalogo.push(cancion);
        console.log("Canción '" + nombre + "' agregada al catálogo");
    } else {
        console.log("La duración ingresada no es un número válido.");
    }
};

const mostrarCatalogo = (catalogo) => {
    if (catalogo.length === 0) {
        console.log("Actualmente no hay canciones disponibles");
    } else {
        console.log(catalogo);
    }
};

const buscarPorGenero = () => {
    const genero = prompt("Ingrese el género para buscar canciones:");
    const cancionesPorGenero = catalogo.filter(cancion => cancion.genero.toLowerCase() === genero.toLowerCase());
    if (cancionesPorGenero.length === 0) {
        console.log("No hay canciones del género ", genero, " en el catálogo");
    } else {
        console.log("Canciones del género ", genero);
        cancionesPorGenero.forEach(cancion => {
            console.log("Nombre ", cancion.nombre, " Duración: ", cancion.duracion, " minutos");
        });
    }
};

const calcularPromedioDuracion = () => {
    if (catalogo.length === 0) {
        console.log("No hay canciones en el catálogo para calcular el promedio de duración");
    } else {
        const duraciones = catalogo.map(cancion => cancion.duracion);
        const promedio = duraciones.reduce((total, duracion) => total + duracion, 0) / catalogo.length;
        console.log("El promedio de duración de las canciones en el catálogo es: ", promedio.toFixed(2), " minutos");
    }
};

while (true) {
    const pregunta = prompt("Quieres añadir alguna canción? SI/NO");

    if (pregunta.toUpperCase() === "SI") {
        agregarCancion();
    } else if (pregunta.toUpperCase() === "NO") {
        mostrarCatalogo(catalogo);
        buscarPorGenero();
        calcularPromedioDuracion();
        break;
    } else {
        console.log("Responde con SI o NO");
    }
}



