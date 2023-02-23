let boton_sumar = document.getElementById('sumar');
let boton_restar = document.getElementById('restar')
let boton_multiplicar = document.getElementById('multiplicar')
let boton_dividir = document.getElementById('dividir')
let boton_exponente = document.getElementById('exponente')
let numero1 = document.getElementById('n1');
let numero2 = document.getElementById('n2');
let resultado = document.getElementById('resultado');


suma = function(){
	console.log(numero1.value);
	console.log(numero2.value);
	let rsuma = Number(numero1.value) + Number(numero2.value);
	resultado.innerHTML =rsuma;
}
resta = function(){
	console.log(numero1.value);
	console.log(numero2.value);
	let rresta = Number(numero1.value) - Number(numero2.value);
	resultado.innerHTML = rresta;
}
multiplicacion = function(){
	console.log(numero1.value);
	console.log(numero2.value);
	let rmultiplicacion = Number(numero1.value) * Number(numero2.value);
	resultado.innerHTML = rmultiplicacion;
}
division = function(){
	if(Number(numero2.value) == 0){
		window.alert('Esta operacion es invalida');
	}
	else{
	console.log(numero1.value);
	console.log(numero2.value);
	let rdivision = Number(numero1.value) / Number(numero2.value);
	resultado.innerHTML = rdivision;
	
	}
}
exponente = function(){
	let rexponente = Number(numero1.value);
	for (var i = 0; i<Number(numero2.value)-1;i++) {
		rexponente = rexponente * Number(numero1.value);
	}
	resultado.innerHTML = rexponente;

}

boton_sumar.addEventListener('click',suma);
boton_restar.addEventListener('click',resta);
boton_multiplicar.addEventListener('click',multiplicacion);
boton_dividir.addEventListener('click',division);
boton_exponente.addEventListener('click',exponente);