var lista_paises = [
    ["España", "Europa", "Castellano", "Euro"],
    ["Francia", "Europa", "Francés", "Euro"],
    ["Italia", "Europa", "Italiano", "Euro"],
    ["Japón", "Asia", "Japonés", "Yen"],
];

function add_pais(){   
    

    var anadir_lista_paises = [];

    var pais = "";
    pais = String(document.getElementById("pais").value);
    anadir_lista_paises[0]=pais;

    var continente ="";
    continente = String(document.getElementById("continente").value);
    anadir_lista_paises[1]=continente;

    var idioma ="";
    idioma = String(document.getElementById("idioma").value);
    anadir_lista_paises[2]=idioma;

    var moneda ="";
    moneda = String(document.getElementById("moneda").value);
    anadir_lista_paises[3]=moneda; 
    
    lista_paises.push(anadir_lista_paises);
    show_pais();
}

function show_pais(){    

    var resultado = "";

    for(i=0; i < lista_paises.length; i++){ 
        resultado = resultado.concat('<h1 style="color:red; font-size:20pt;">'+ lista_paises[i] +'</h1>'+'<br>'); 
    }

    document.getElementById("resultado").innerHTML = '<h1 style="color:red; font-size:20pt;">'+ resultado +'</h1>'+'<br>';

}





