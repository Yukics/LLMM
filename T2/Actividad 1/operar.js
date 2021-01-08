var num1 = prompt("Introduce un numero: ");
var num2 = prompt("Introduce otro nummero: ");
var oper = prompt("Que quieres hacer, + o *: ");

if (Number(num1)==num1 && Number(num2)==num2 && (oper=="*" || oper=="+")){
    document.writeln(num1,oper,num2,"=",operacion(num1,num2,oper));
} else {
    alert("Ha habido un error, a lo mejor no has introducido numeros o el operador es erroneo");
}

function operacion(num1, num2, oper){
    if(oper=="*"){
        var resultado = (parseInt(num1)*parseInt(num2));
    } else if(oper=="+"){
        var resultado = (parseInt(num1)+parseInt(num2));
    }
    return resultado
}