tiempoMostrar = document.querySelector('h1');
circulo = document.querySelector('div');
tiempoInicial = new Date().getTime();
let arregloColores = ['red','blue','yellow','brown','purple','orenge']
let color =  arregloColores[Math.floor(Math.random()*arregloColores.length)]


mostrarCirculo = function(){
	circulo.style.top = (Math.random() * 800) + 'px';
	circulo.style.left = (Math.random() * 1000) + 'px';
	circulo.style.display = 'block';
	circulo.style.backgroundColor = color;
	circulo.style.borderColor = color;
}

circulo.onclick = function calcularTiempo(){
	circulo.style.display = 'none';
	setTimeout(mostrarCirculo,2000);
	let tiempoFinal = new Date().getTime();
	let tiempo = (tiempoFinal - tiempoInicial)/1000;
	tiempoMostrar.innerHTML = tiempo;
	if (tiempo.value >= 10) {
	tiempoMostrar.innerHTML = 'demasido lento';
}
}
mostrarCirculo();

