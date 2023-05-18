//ForIn itera sobre objetos
const auto = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0',
}

//manera de acceder a los valores
for(let propiedad in auto) {
    console.log(`${auto[propiedad]}`);
}

//forma diferente de iterar un objeto para acceder de forma mas sencilla a sus llaves y valores
for(let [llave, valor] of Object.entries(auto)){
    console.log(valor)
}