function cadenear(){
    
    var texto = String(document.getElementById("texto").value);

    document.getElementById("minusculas").innerHTML = texto.toLowerCase();
    document.getElementById("majusculas").innerHTML = texto.toUpperCase();
    document.getElementById("menoscinco").innerHTML = texto.substring(0,texto.length-5);
    document.getElementById("array").innerHTML = texto.split(" ");    
    
}