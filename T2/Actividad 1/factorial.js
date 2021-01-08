var salir = 0;

while (salir==0){
    var numero = prompt("Dime un numero para hacer el fatorial: ");

    if(numero==null || numero=="" || numero==0){
        document.writeln("Error al introducir datos");
        salir=1;
    } else {  
        if(!confirm("El factorial de "+numero+" es " +factorial(numero))){
            document.writeln("Gracias por utilizar este programa");
            salir=1;
        }
    }
}

function factorial(factor){
    factor = parseInt(factor);
    var factorial = factor;
    while(factor > 1){
        factor--;
        factorial = factorial * factor;    
    }
    return factorial;
}
