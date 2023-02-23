let titulo = document.getElementById('titulo');
let nombre = document.getElementById('nombre');
let apellidos = document.getElementById('apellidos');
let boton = document.getElementById('boton');
let parrafo = document.getElementById('parrafo');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let boton2 = document.getElementById('boton2');
let parrafo2 = document.getElementById('parrafo2');
let dia = document.getElementById('dia');
let mes = document.getElementById('mes');
let año = document.getElementById('año');
let boton3 = document.getElementById('boton3');

funcion1 = function(){
	titulo.innerHTML = nombre.value + '\n' + apellidos.value;
}
funcion2 = function(){
	let suma = Number(num1.value) + Number(num2.value);
	parrafo.innerHTML = suma;
}
funcion3 = function(){
	parrafo2.innerHTML = dia.value + '/' + mes.value + '/' + año.value;
}

boton.addEventListener('click', funcion1);
boton2.addEventListener('click', funcion2);
boton3.addEventListener('click', funcion3);