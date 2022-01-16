/*
las variables en Js son Dinamicas porque se pueden cambiar en cualquier
momento su valor y por ende su tipo de dato
 */

// string
var nombre = 'Rodrigo';

// numerico
var edad = 29;

// objeto
var persona = {
    nombre: 'Rodrigo',
    apellidos: 'Roman Salvatierra',
    edad: 29,
    telefonos: {
        celular: 75081523,
        telefonoFijo: 3585356
    },
    cursos: ['ReactJs', 'NodeJs', 'Angular']
}

// typeOf : nos permite visualizar el tipo de datos de una variable
console.log(typeof apellidos);

// booleano
var bandera = true;

// funcion: tambien es un tipo de dato
function myFuncion(){return console.log('Hola');}
console.log(typeof myFuncion);

// clase: las clases tambien son funciones en js
class Persona {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

// null: ausencia de valor | es un tipo de datos Object
var nulo = null;
console.log(typeof nulo);

// arreglos : son tambien de tipo Object
var autos = ['Toyota','Suzuki','Nissan'];
console.log(autos);
console.log(typeof autos);

// Empy String: valor de cadena vacia
var sexo = '';
console.log(typeof sexo);

// La función isNaN() determina cuando el valor es numero, retorna true o false
if (isNaN(edad)) {
    console.log('no es un numero');
}else{
    console.log('es numero');
}

// precedencia de operadores
let x = 5;
let y = 10;
let z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);