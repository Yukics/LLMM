function enlacear(){
    var links = document.getElementsByTagName("a");
    var contador = 0;

    /*for(i=0;i<links.length;i++){
        if(links[i].innerHTML == "Google"){
            contador = contador + 1;
        }
        
    }*/
    
    for(i=0;i<links.length;i++){
        if(links[i].href.includes("google")){
            contador = contador + 1;
        }        
    }   
    
    document.getElementById("kpacha").innerHTML = "Hay " + links.length + " enlaces<br>El último enlace es: "+links[links.length-1].href+"<br>"+contador+" enlaces apuntan a google";
}