/*
Ejercicio 1

Crea un archivo ejercicio1.js que tenga un objeto usuario con los siguientes campos:
-	Nombre (el tuyo o inventado)
-	Apellidos (el tuyo o inventado)
-	Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
-	Si estás en busqueda activa con un valor de verdadero o false

En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del objeto que hemos creado anteriormente
*/

console.log("EJERCICIO 1")

const userObject = {
    name: "Cristobal",
    lastname: "Moya Lorente",
    bootcampTopics: [
        { nombre: "Node.js", fechaInicio: "2024-02-12" },
        { nombre: "Git", fechaInicio: "2023-11-28" },
        { nombre: "React", fechaInicio: "2024-04-15" }
    ],
    activeSearch: false
};

console.log("React module start date:", userObject.bootcampTopics[2].fechaInicio);

