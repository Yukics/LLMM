function posneg(){
    
    var edat = parseInt(prompt("Dime tu edad: "));

    while(edat != 0){

        if (edat>0){
            alert("Es positiu");
        } else {
            alert("Es negatiu");
        }
        
        edat = parseInt(prompt("Dime tu edad: "));
    }

}