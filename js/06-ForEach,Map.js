//forEach -> ideal para recorrer arrays
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'JavaScript'];

pendientes.forEach((pendiente, i) => console.log(pendiente, i));


//map -> igual a forEach solo que CREA una VARIABLE

const carrito = [ //el segundo parametro corresponde al indice
    {nombre: 'Monitor 20"', precio:500 },
    {nombre: 'televisor', precio:100 },
    {nombre: 'celular', precio:200 },
    {nombre: 'Ryzen', precio:300 },
    {nombre: 'Intel', precio:400 },
    {nombre: 'Teclado', precio:700 },
]
carrito.map((producto, indice) => console.log(`${indice}: ${producto.nombre}`));
