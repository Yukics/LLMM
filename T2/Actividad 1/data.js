var dia_mes = new Date().getDate();
var mes = new Date().getMonth();
var ano = new Date().getFullYear();
var hora = new Date().getHours();
var min = new Date().getMinutes();
var sec = new Date().getSeconds();
document.write("Estamos a ",dia_mes," del ", mes, " de ", ano, ", y son las ",hora," horas ",min," minutos y ",sec, " segundos.");