function calculardescuento(){

    if (document.getElementById("ford").checked){
        var marca = "Ford";
        var rebaja = 10;        

    } else if (document.getElementById("seat").checked){
        var marca = "Seat";
        var rebaja = 8;

    } else if (document.getElementById("citroen").checked){
        var marca = "Citroen";
        var rebaja = 6;

    } else if (document.getElementById("audi").checked){
        var marca = "Audi";
        var rebaja = 4;

    } else {
        var marca = "Generica";
        var rebaja = 0;
        alert("No hay descuento");
    }

  
    var precio = parseInt(document.getElementById("precio").value);

    document.getElementById("descuento").innerHTML = 'El precio final del coche es: '+((precio-((precio*rebaja)/100)).toFixed(2))+'€, al ser de la marca '+marca+' y aplicársele un descuento del '+rebaja+'%';
    
}