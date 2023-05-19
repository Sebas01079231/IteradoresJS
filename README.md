# IteradoresJS
Guia de iteradores en JS

# for ->
    se utiliza para ejecutar un bloque de código repetidamente mientras se cumple una condición. La sintaxis básica de un bucle for es la siguiente:
        
        for (inicialización; condición; incremento) {
            // Código a ejecutar mientras se cumpla la condición
        }
    En este código, inicialización se utiliza para inicializar una variable de control antes de que comience el bucle. condición es una expresión booleana que se evalúa antes de cada iteración del bucle. Si la expresión es verdadera, el bucle continúa. Si la expresión es falsa, el bucle se detiene.

    incremento se utiliza para actualizar la variable de control después de cada iteración del bucle. Por lo general, se utiliza para aumentar o disminuir la variable de control en un valor determinado.
    
# while ->
    se utiliza para ejecutar un bloque de código mientras se cumpla una condición. La sintaxis básica de un bucle while es la siguiente:

        while (condición) {
            // Código a ejecutar mientras se cumpla la condición
        }

# do-while ->
    se utiliza para ejecutar un bloque de código al menos una vez y luego repetirlo mientras se cumpla una condición. La sintaxis básica de un bucle do-while es la siguiente:

        do {
            // Código a ejecutar al menos una vez
        } while (condición);

# forEach ->
    es un método que se utiliza para recorrer los elementos de un array y ejecutar una función para cada uno de ellos.
        
        array.forEach(function(elemento) {
            // Código a ejecutar para cada elemento
        });

# map -> 
    igual a forEach solo que CREA una VARIABLE

    const pendiente = pendientes.map((pendiente) => console.log(pendiente));

# ForOf ->
    -Este loop itera sobre arreglos
        for (let variable of iterable){

        }
    -donde 'elemento' es una variable que se asigna a cada elemento del array y 'objetoIterable' es el objeto iterable que se va a recorrer.

    -Este tipo de bucle es muy útil cuando se quiere iterar sobre todos los elementos de un arreglo sin necesidad de usar un contador o índice de posición.

        const pendientes = ['Tarea', 'Comer', 'Proyecto', 'JavaScript'];

        for (let pendiente of pendientes){
            console.log(pendiente);
        }

# forIn ->
    -itera sobre objetos
    -misma sintaxis de forOf

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
