var listainfo = ["Ratolí","Teclat"];

function ensenar_lista(){
    document.getElementById("lista").innerHTML = listainfo;
}

function anadircosa(){
    var cosa = prompt();
    listainfo.push(cosa);
    document.getElementById("lista").innerHTML = listainfo;
}