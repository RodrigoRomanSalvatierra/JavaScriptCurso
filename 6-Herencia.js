class Persona {

    static contadorPersonas = 0;

    constructor(nombre,apellidos,edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellidos = apellidos;
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
        return this._apellidos;
    }

    set apellido(apellido){
        this._apellidos = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} 
                ${this._nombre} 
                ${this._apellidos} 
                ${this._edad}`;
    }

}