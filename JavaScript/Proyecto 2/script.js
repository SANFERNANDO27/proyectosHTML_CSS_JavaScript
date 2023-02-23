mifuncion = function(){
	console.log('Holaaa');
	alert('Salute mond');
	let texto = ('adios');
	alert(texto);
};
operacionfunc = function(){
	let valor1 = (1);
	let valor2 = (2);
	alert(valor1+valor2);
	console.log('la operacion fue realizada');
	alert(valor1-valor2);
};


let boton1 = document.getElementById('enojado');
let boton2 = document.querySelector('button');
let boton3 = document.getElementById('operacion');
let boton4 = document.getElementById('mouseover');
boton1.onclick= function(){
	alert('Hola Mundo');
};
boton2.onclick= function(){
	mifuncion();
};
boton3.onclick= function(){
	operacionfunc();
};
boton4.addEventListener('mouseover',operacionfunc);

