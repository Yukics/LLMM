function media(){

    for(i=0;i<3;i++){
        var numero = parseInt(prompt("Introduce la nota "+ (i+1) + ": "));
        var total = numero + total;
    }

    var media = (total / 3).toFixed(2);
    
    if (media<5){
        alert("El alumno ha suspendido con un: " + media);
    } else {
        alert("El alumno ha aprobado con un: " + media);
    }
}