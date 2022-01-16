/*
------------------------------------------------------------
    1- FUNCIONES
------------------------------------------------------------
una funcion es un codigo reutilizable, el cual podemos invocarlo cuantas veces necesitemos
*/

function miFuncion(a,b){
return a+b;
}

console.log(miFuncion(5,5));

/*
------------------------------------------------------------
    2- FUNCIONES DE TIPO EXPRESION
------------------------------------------------------------
funciones de tipo expresion, no declaramos nombre para la funcion
la variable almacena una referencia a la funcion
*/

let suma = function (a,b) {return a+b};

console.log(suma(500,5));

/*
------------------------------------------------------------
    3- FUNCIONES SELF INVOKING
------------------------------------------------------------
funciones tipo Self Invoking, consiste en que la funcion se puede llamar asi misma.
*/

(function (a,b){
    console.log(a+b);
})(6,3);


/*
------------------------------------------------------------
    4- FUNCIONES DE FLECHA
------------------------------------------------------------
Funciones de flecha, se introdujieron en ES6
1- ya no se especifica la palabra reservada function
2- ya no se utiliza {}
3- se utiliza el operador de flecha =>
4- en el cuerpo de la funcion se omite el uso de return
*/

// funcion normal
let sumar = function(a,b){return a+b};
// arrow function
const sumarArrow = (a,b) => a+b;


/*
------------------------------------------------------------
    5- DIFERENCIA ENTRE PARAMETROS Y ARGUMENTOS EN FUNCIONES 
------------------------------------------------------------
 1- PARAMETROS: son la lista de valores que declaramos en la funcion al crearlo
 2- ARGUMENTOS: son los valores que le pasamos a la funcion al momento de invocarla

 NOTA: en Js no es necesario que coincidan la cantidad de parametros con la cantidad de argumentos cuando llamamos a la funcion
        esta puede ser llamada con mas argumentos y accederlas desde la propiedad arguments indicandole el indice
*/

// ejemplo1
// parametros
let sumar2 = function (a,b){
   console.log(arguments[0]);
   console.log(arguments[1]);
    return a+b 
};
// argumentos
console.log(sumar2(50,12));

// ejemplo2
// parametros
let sumar3 = function (a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);

     return a+b+arguments[2];
 };
 // argumentos
 console.log(sumar3(50,12,10));


 /*
------------------------------------------------------------
    6- SUMA DE ARGUMENTOS
------------------------------------------------------------
*/

let resultado = sumaArgumentos(10, 20, 30, 60);

function sumaArgumentos() {
    let suma = 0;
    for (let index = 0; index < arguments.length; index++) {
        suma += arguments[index];
    }
    return suma;
}

console.log(resultado);


 /*
------------------------------------------------------------
    7- PASO POR VALOR A FUNCIONES
------------------------------------------------------------
    el paso por valor no modificara el valor de la variable primitiva
*/
let x = 10; // estos Tipos de datos primitivos no se pueden cambiar su valor bajo ninguna circunstancia (Numericos, Booleanos)

function cambiarValor(a) {
    a = 20;
}
// paso por valor
cambiarValor(x); // x= 10
console.log(x);


/*
------------------------------------------------------------
    8- PASO POR REFERENCIA A FUNCIONES
------------------------------------------------------------
    los valores por referencia modifican el valor de la propiedad del objeto creado en un espacio de memoria
*/
// el objeto se crea en un espacio en Memoria RAM
const persona = {
    nombre : 'Roro',
    apellido : 'Guzman',
    sexo: 'Masculino'
}

function cambiarValorObjeto(_persona) {
    // accedemos al espacio en memoria del Objeto Persona y modificamos los valores de las propiedades indicadas
    _persona.nombre = 'RoroUpdate';
    _persona.apellido = 'GuzmanUpdate';
}

cambiarValorObjeto(persona); // llamamos a la funcion le pasamos el objeto persona
console.log(persona);