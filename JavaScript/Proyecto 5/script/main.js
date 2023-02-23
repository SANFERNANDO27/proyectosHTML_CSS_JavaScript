let parrafo = document.getElementById('parrafo');
let texto = document.getElementById('texto');
let boton = document.getElementById('boton');

window.onload = function(){
	parrafo.innerHTML = 'Hola';
}

funcion1 = function(){
	parrafo.innerHTML = texto.value;
}
boton.addEventListener('click', funcion1);