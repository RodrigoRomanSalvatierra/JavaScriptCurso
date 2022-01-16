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

class Empleado extends Persona{
    static contadorEmpleado = 0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++ Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} 
                ${this._idEmpleado} 
                ${this._sueldo}`;
    }
}

class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fecha){
        this._fechaRegistro = fecha;
    }

    toString(){
        return `${super.toString()} 
                ${this._idCliente} 
                ${this._fechaRegistro}`;
    }
 }

 // pruebas
 let persona1 =  new Persona('Rodrigo','Roman Salvatierra',29);
 console.log(persona1);

 let persona2 =  new Persona('Freddy','Roman Salvatierra',30);
 console.log(persona2);

 // Empleados
 let empleado1 =  new Empleado('Julio','Rosas Gramon',30,7500);
 console.log(empleado1);

 let empleado2 =  new Empleado('Roger','Guzman Gramon',45,9500);
 console.log(empleado2);

 // Clientes
 let cliente1 = new Cliente('Maria','Ferrufino', 36, new Date());
 console.log(cliente1);