let index = 1;
let botonAnterior = document.getElementById('anterior')
let botonSiguiente = document.getElementById('siguiente')

function mostrarSlide(n){
	let slides = document.getElementsByClassName('slider');
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	if (n>slides.length) {
		index = 1;
		n=1;
	}
	if (n<1){
		index = slides.length;
	}
	slides[n-1].style.display = "block";
}
mostrarSlide(1);

function mostrarSlides(n){
	index+=n;
	mostrarSlide(index);
}
setInterval(mostrarSlides,3000,1);
