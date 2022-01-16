/**
 * CLASE : una clase es una plantilla en el cual vamos a definir
 * Atributos y Metodos apartir de esa plantilla vamos a poder crear instancias para objetos
 * 
 */
class Persona {

    static contador = 1;
    
    // atributos NO estaticos
    email = 'roro@gmail.com';

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    static saludar(){
        console.log('saludos desde metodo static..!');
    }
}

let persona1 = new Persona('Rodrigo', 'Roman');
console.log(persona1);

// get
console.log(persona1.nombre);
// set
persona1.nombre= 'Rodrigo Guzman';
console.log(persona1);


/**
 * HERENCIA heredar caracteristicas (atributos,metodos) de una clase Padre
 * 
 */

class Empleado extends Persona{

    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // llamada al constructor de la clase padre
        this._departamento = departamento;
    }  
    
    get departamento(){
        return this._departamento;
    }

    set departamento(dpto){
        this._departamento = dpto;
    }
    // sobreEscritura
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._departamento;
    }

    
}

let empleado1 = new Empleado('Juan','Manuel','Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
// acceder a metodo de padre
console.log(empleado1.nombreCompleto());


/**
 * SOBREESCRITURA: nos permite desde la clase hija modificar el comportamiento definido de un metodo
 * de la clase padre
 * en este caso lo unico que se hace es volver a declarar el metodo con el mismo nombre del padre en
 * la clase hija para sobreescribir el return
 * 
 *  nombreCompleto(){
    return super.nombreCompleto() + ' ' + this._departamento;
    }
 */
 
  /**
   * METODOS ESTATICOS
   * un metodo definido como estatico no puede ser ejecutado por ningun otro objeto
   * por mas que este objeto tenga una instancia de una clase, es solamente visible para la clase en si.
   *  */  
// llamada a metodo stactic
  Persona.saludar();

 /**
  * ATRIBUTOS ESTATICOS.
  * son atributos que se asocian o pertenecen exclusivamente a la Clase y no a los objetos
  *  */ 

 console.log(Persona.contador);
 console.log(Empleado.contador);

 // accediendo a atributo No estatico
 console.log(persona1.email);
 