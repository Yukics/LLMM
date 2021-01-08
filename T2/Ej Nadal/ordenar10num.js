function sort10num(){

    var listanum = [];

    for(i=0; i<10; i++){
        var numero = parseInt(prompt("Introduce el "+(i+1)+ " numero: "));

        if(numero !== numero){  /*Este !== comprueba que numero no sea NaN de lo 
                                contrario pasaria NaN que no pueden ser ordenados 
                                con sort*/
            numero = 0;
        }

        listanum.push(numero);
    }
    
    alert(listanum.sort((a, b) => a - b));

}