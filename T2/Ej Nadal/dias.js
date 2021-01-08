var listas_dias = [];
function dias(){   

    var dia = String(document.getElementById("dia").value);
    listas_dias.push(dia);

    print_dias();
}

function print_dias(){
    var resultado = "";

    for(i=listas_dias.length-1;i>=0;i--){
        resultado = resultado.concat('<p>'+listas_dias[i]+'</p>');
    }

    document.getElementById("listadias").innerHTML = resultado;
}