var listainfo = ["Ratolí","Teclat"];

function ensenar_lista(){
    document.getElementById("lista").innerHTML = listainfo;
}

function anadirrouter(){
    listainfo.push("Router");
    document.getElementById("lista").innerHTML = listainfo;
}