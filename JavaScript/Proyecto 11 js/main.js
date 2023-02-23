let texto = 'expresiones regulares';
let expresionRegular = /regulares/;
let resultado = expresionRegular.test(texto);
document.write(resultado + '<br>');

texto = 'me gusta leer mucho'
expresionRegular = /e/;
resultado = texto.search(expresionRegular)
document.write(resultado + '<br>');

texto = 'me gusta leer mucho'
expresionRegular = /oa/;
resultado = texto.search(expresionRegular)
document.write(resultado + '<br>');

texto = 'me gusta jugar videojuegos'
expresionRegular = /videojuegos/;
resultado = texto.replace(expresionRegular, 'minecraft')
document.write(resultado + '<br>');

texto = 'talar, jalar, halar, borrar';
expresionRegular = /a/g;
resultado = texto.replace(expresionRegular, 'o')
document.write(resultado + '<br>');

texto = 'hola como estas 1 2 3 4';
expresionRegular = /[1-4]/g;
resultado = texto.match(expresionRegular)
document.write(resultado + '<br>');

expresionRegular = /[a-c]/g;
resultado = texto.match(expresionRegular)
document.write(resultado + '<br>');

texto = 'me gusta ir al cine';
expresionRegular = /gusta|cine/g;
resultado = texto.match(expresionRegular)
document.write(resultado + '<br>');

texto = 'me gusta ir al cine';
expresionRegular = /cine/g;
resultado = texto.replace(expresionRegular, 'acuario')
document.write(resultado + '<br>');

texto = 'Judy, karoll, Santiago, Fer';
expresionRegular = /[a-e]/g;
resultado = texto.replace(expresionRegular, 'Diana')
document.write(resultado + '<br>');

texto = 'Hola tengo espacios';
expresionRegular = /\s/g;
resultado = texto.match(expresionRegular)
document.write(resultado + '<br>');