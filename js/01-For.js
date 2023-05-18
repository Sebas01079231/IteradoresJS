// separar numero en pares e impares
for (let i = 1; i <= 20 ; i++) {
    if (i % 2 == 0) {
        console.log(`El numero ${i} es par`)
    } 
    else{
        console.log(`El numero ${i} es Impar`)
    }
}


const carrito = [
    {nombre: 'Monitor 20"', precio:500 },
    {nombre: 'televisor', precio:100 },
    {nombre: 'celular', precio:200 },
    {nombre: 'Ryzen', precio:300 },
    {nombre: 'Intel', precio:400 },
    {nombre: 'Teclado', precio:700 },
]


for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}