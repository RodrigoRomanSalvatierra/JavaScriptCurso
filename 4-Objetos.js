/*
1- los objetos tipos primitivos (number, string) no tienen propiedades ni metodos (Number, Boolean)
2- los Objetos tienen propiedades y metodos a los cuales podemos acceder
    los objetos se crean en un espacio en memoria
*/
let persona = {
    nombre: 'Rodrigo',
    apellidos: 'Roman'
}
console.log(persona.nombre);

/*
 2- Agregar Metodos a objetos
 this > es un apuntador que apunta al objeto que se este trabajando en ese momento
*/
let persona2 = {
    nombre: 'Rodrigo',
    apellidos: 'Roman',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellidos;
    }
}
console.log(persona2.nombreCompleto());

/*
 3- Creacion de Objeto, es otra forma de crear objeto, aunque no es comun, porque ahora se usa la sintaxis simplificadas de arriba
 con la palabra reservada new le indicamos que se tiene que crear un nuevo objeto en memoria
 para luego poder acceder a ella y crear propiedades
*/
let persona3 = new Object(); // creacion de objeto vacio
persona3.direccion = 'Km6 dble. via la guardia';
console.log(persona3.direccion);

/**
 * 4 Acceder a propiedades del Objeto
 * For in  > recorre cada una de las propiedades de un objeto
 */
console.log(persona2.nombre);
console.log(persona2['apellidos']);

for (element in persona2){
    // accediendo a los nombres de las propiedades
    console.log(element); 
    // accediendo a los valores de la propiedades
    console.log(persona2 [element]);
}   

/**
 * 5- Agregar y Eliminar propiedades de un Objeto
 */

let persona4 = {
    nombre: 'Juan',
    edad: 30,
    telefonos:{
        celular: '75081523',
        fijo: '3585356'
    }
}
// agregar propiedad
persona4.apellido='Perez';
console.log(persona4);
// eliminar propiedad
delete persona4.apellido;
console.log(persona4);

/**
 * 6- Formas de imprimir un Objeto
 * ver el detalle de nuestros objetos en navegadores web
 */

// let personaArray = Object.values(persona4);
console.log(Object.values(persona4));
console.log(JSON.stringify(persona4))


/*
 * 7- Metodos GET SET 
 * GET llamar a atributos de nuestro objeto
 */

let persona5 = {
    nombre: 'Rodrigo',
    apellidos: 'Roman',
    get nombreCompleto(){ // indicamos a JS que este es una funcion que retorna un valor
        return this.nombre + ' ' + this.apellidos;
    }
}
// ya no hay necesidad de los () ya lo manejamos como propiedad normal
console.log(persona5.nombreCompleto);


/*
 * 7- Metodos GET SET 
 * GET llamar a atributos de nuestro objeto
 * SET se utiliza para modificar los valores de los atributos de nuestro Objeto
 */
let persona6 = {
    nombre: 'Rodrigo',
    apellidos: 'Roman',
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();

    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){ // indicamos a JS que este es una funcion que retorna un valor
        return this.nombre + ' ' + this.apellidos;
    }
}
console.log(persona6.lang);
persona6.lang = 'en'; // modificando el valor de propiedad leng, llamando al metodo set
console.log(persona6.lang);
console.log(persona6.idioma);// almacenamiento de nuevo valor


/**
 * 8- Metodo Constructor en objetos
 * utilizamos este metodo para reutilizar la funcion en varias llamadas
 *  */
function Persona(nombre,apellido,edad,cursos){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cursos = cursos;
}

let persona7 =  new Persona('Rodrigo', 'Roman',30,['React','Angular','NodeJs']);
console.log(persona7);

let persona8 = new Persona('Francis','Pereira Valverde',['Phicologia']);
console.log(persona8);


/**
 * 9- Agregar Metodos a un Metodo contructor
 * 
 */
function Auto(marca,color,modelo){
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.marcaModelo = function(){
        return this.marca + ' ' + this.modelo;
    }
}

let vehiculo =  new Auto('Toyota','Runner',2020);
console.log(vehiculo.marcaModelo());

/*
 * Tipos de creacion de Objetos, 
 */

let myObject = new Object;
let myObject2 = {}; // sintaxis correcta

let myArray = new Array();
let myArray2 = []; // sintaxis correcta

let myNumber =  new Number(2021);
let myNumber2 =  2021; // sintaxis correcta

let myString = new String('Roman');
let myString2 =  'Roman'; // sintaxis correcta

let myBoolean =  new Boolean(true);
let myBoolean2 =  false;  // sintaxis correcta


/*
* 10 - Prototypes 
* nos permite modificar tanto los atributos como los metodos asociados a un Objeto
 */

function Animal(nombre,especie,raza,color) {
    this.nombre = nombre;
    this.especie = especie;
    this.raza = raza;
    this.color = color;
}

// agregar propiedad al objeto para que se use en todos los objetos que la usan
Animal.prototype.edad = 2;

let perro = new Animal('Kaiser','Perro','Boxer','Blanco');
console.log(perro);
console.log(perro.edad);


/**
 * Uso de funcion CALL
 * nos permite llamar un metodo que se encuentra en un objeto desde otro objeto ajeno
 */

let obj1 = {
    param1:'parametro1',
    param2: 'parametro2',
    param1and2: function(){
        return this.param1 + ' - ' + this.param2;
    }
}
console.log(obj1.param1and2());

let obj2 = {
    param1:'parametroObj2',
    param2: 'parametroObj2',
}

// llamar a metodo de obj1
console.log(obj1.param1and2.call(obj2));



/**
 * Uso de funcion CALL paso de argumentos o parametros
 * nos permite llamar un metodo que se encuentra en un objeto desde otro objeto ajeno
 * funcion apply podmemos realizar el paso de parametros mediante un array
 */

 let obj3 = {
    param1:'parametro1',
    param2: 'parametro2',
    param1and2: function(titulo,tel){
        return titulo + ': ' + this.param1 + ' - ' + this.param2 + ' telefono: ' + tel;
    }
}
console.log(obj3.param1and2('Objeto','75081523'));

let obj4 = {
    param1:'parametroObj4',
    param2: 'parametroObj4',
}
// llamada a metodo de obj3 y paso de argumentos
console.log(obj3.param1and2.call(obj3,'Objeto4','3585356'));
let arreglo = ['param1Array','param2Array'];
console.log(obj3.param1and2.apply(obj3,arreglo));
