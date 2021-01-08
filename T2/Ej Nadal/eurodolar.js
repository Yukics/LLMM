function eurodolar(){

    if (document.getElementById("eudol").checked){
        var multiplicador = 1.22; 
        var tipo = "$";       

    } else if (document.getElementById("doleu").checked){
        var multiplicador = 0.82;
        var tipo = "€";

    } else { alert("No has selecionado el tipo de conversión"); }

    var cantidad = parseInt(document.getElementById("cantidad").value);
    
    document.getElementById("conversion").innerHTML = 'La conversión es: '+(cantidad*multiplicador).toFixed(2)+tipo;

}