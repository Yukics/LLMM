function calcularedad(){

    var edad = parseInt(document.getElementById("edad").value);

    if (edad>=16){

        document.getElementById("enlace").innerHTML = '<a href="http://www.caib.es">http://www.caib.es</a>';
    
    } else {

        document.getElementById("enlace").innerHTML = '';
        alert("Eres menor de edad, por lo que no puedes entrar en el enlace");
    }
}