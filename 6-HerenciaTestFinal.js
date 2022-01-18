class Persona {

    static contadorPersona = 0;

    constructor(nombre,apellido,edad){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(app){
        this._apellido = app;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad =  edad;
    }

    toString(){
        return `${this._idPersona} 
                ${this._nombre} 
                ${this._apellido} 
                ${this._edad}`;
    }
}

class Empleado extends Persona {

    static contadorEmpleado = 0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(salary){
        this._sueldo = salary;
    }

    toString(){
       return `${super.toString()} 
                ${this._sueldo} 
                ${this._idEmpleado}`;
    }
}

let persona1 = new Persona('Francis', 'Pereira Valverde',25);
console.log(persona1);

let empleado = new Empleado('Rodrigo','Roman Salvatierra',30,9500);
console.log(empleado);

let empleado1 = new Empleado('Freddy','Roman Salvatierra',30,9500);
console.log(empleado1);