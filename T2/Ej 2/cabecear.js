var cabecerah1 = "Esta es la primera cabecera";

function ensenar_cabecera(){
    document.getElementById("cabecera").innerHTML = cabecerah1;
}

function anadir_cabecera(){
    var n = parseInt(prompt("Cuantas cabeceras vas a añadir? "));

    for(i=0;i<n;i++) {       
        var ntexto = prompt("Dame una cabecera: ");
        cabecerah1 = cabecerah1 + "<br>" + ntexto;
    }
    ensenar_cabecera();
}