/*
imprimirNombres = function(){
	setTimeout(()=>{
		document.write('Jorge' + '<br>');
		document.write('Santiago' + '<br>');
		document.write('Fernando' + '<br>');
		document.write('Andrea' + '<br>');
	},3000);
	document.write('Esperando Informacion')
}
imprimirNombres();
*/
let arregloColores = ['red','blue','yellow','brown','purple','orenge']

function cambiarColor(){
	document.querySelector('p').style.color =
	arregloColores[Math.floor(Math.random()*arregloColores.length)];
}


setInterval(cambiarColor,1000);

function cambiarBackGroundColor(){
	document.querySelector('body').style.backgroundColor =
	arregloColores[Math.floor(Math.random()*arregloColores.length)];
}


setInterval(cambiarBackGroundColor,3000);

function cambiarContenido(){
	document.querySelector('p').innerHTML = 
	arregloColores[Math.floor(Math.random()*arregloColores.length)];
}


setInterval(cambiarContenido,4000);

