/*
    break: rompe con la ejecucion del bucle totalmente

    continue: rompe un ciclo de ejecucion en concreto, pero se sigue ejecutando la siguiente instruccion del bucle hasta que se cumpla la condicion 
*/
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         console.log('Numero: Cinco')
//         break;
//     }
//     console.log(`Numero: ${i}`);
// }

const carrito = [
    {nombre: 'Monitor 20"', precio:500 },
    {nombre: 'televisor', precio:100 },
    {nombre: 'celular', precio:200, descuento : true },
    {nombre: 'Ryzen', precio:300 },
    {nombre: 'Intel', precio:400 },
    {nombre: 'Teclado', precio:700 },
];
for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`${carrito[i].nombre} --En Descuento--`);
        continue;
    }
    console.log(carrito[i].nombre);
}