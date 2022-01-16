const autos = ['Toyota', 'Suzuki', 'Nissan'];
console.log(autos);
console.log(autos[2]);

// op1 recorrer los valores del array
for (let index = 0; index < autos.length; index++) {
    console.log(autos[index]);
}
// op2 recorrer los valores del array
autos.forEach(value => {
    console.log(value);
});

const persona = [{
    nombre: 'Rodrigo',
    apellido: 'Roman',
    edad: 29
},
{
    nombre: 'Freddy',
    apellido: 'Roman',
    edad: 30
}];

// recorrer valores del array de objetos
persona.forEach(element => {
    console.log(element.nombre);
});

// Modificar valores de un array
autos[0] = 'Toyota Hilux';
console.log(autos);

// op1 agregar nuevo valores a un array
autos.push('BMW','Volvo');
console.log(autos);

/* op2 agregar nuevo valores a un array,
 length identificamos el tamaño de elementos del array
 tomamos el tamaño de elementos como un nuevo indice para el nuevo insert
 */
console.log(autos.length);
autos[autos.length]= 'Tiggo 3';
console.log(autos);

// preguntar si una variable es un arregle
if (Array.isArray(autos)) {
    console.log('es un arreglo'); 
}
