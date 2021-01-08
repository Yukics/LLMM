var ndni = parseInt(prompt("Introdueix el teu DNI sense la lletra"));
var lletres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

if (Number(ndni) == ndni && ndni <= 99999999 && ndni >= 1){
    var indice = ndni%23;
    alert(ndni+lletres[indice]);
}