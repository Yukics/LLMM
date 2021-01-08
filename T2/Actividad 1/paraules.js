var lista_palabras = prompt("Introduce una frase: ").split(" ");


document.writeln("Tu frase tiene: ", lista_palabras.length, " palabras <br>");
document.writeln("La primera palabra es: ", lista_palabras[0], " y la ultima: ", lista_palabras[parseInt(lista_palabras.length)-1], "<br>");
document.writeln("Las palabras de tu frase al reves son: ", lista_palabras.reverse())