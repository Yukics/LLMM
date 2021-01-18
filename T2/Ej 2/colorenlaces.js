function cambiarcolor(){
    var color = prompt("Que color quieres? (Debe ser en ingles, formatos que css entienda): ")
    var links = document.getElementsByTagName("a");

    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = color;  
        }
    }  
}