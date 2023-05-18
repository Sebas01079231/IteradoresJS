/* Este loop itera sobre arreglos
    for (let variable of iterable)

    Donde "variable" es una variable que tomará el valor de cada elemento del arreglo e "iterable" es el objeto que se va a recorrer.

    Este tipo de bucle es muy útil cuando se quiere iterar sobre todos los elementos de un objeto  sin necesidad de usar un contador o índice de posición.
*/
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'JavaScript'];


const carrito = [ 
    {nombre: 'Monitor 20"', precio:500 },
    {nombre: 'televisor', precio:100 },
    {nombre: 'celular', precio:200 },
    {nombre: 'Ryzen', precio:300 },
    {nombre: 'Intel', precio:400 },
    {nombre: 'Teclado', precio:700 },
]


for (let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.nombre);
}