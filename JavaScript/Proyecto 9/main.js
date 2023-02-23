let input_genero = document.getElementById('genero');
let input_edad = document.getElementById('edad');
let h1_resultado = document.getElementById('resultado');
let btn_resultado = document.getElementById('botonr');

funcion1 = function(){
	if ((input_genero.value) == 'girl') {
		if (Number(input_edad.value) < 14) {
			h1_resultado.innerHTML = 'carrusel';
		}
		else{
			h1_resultado.innerHTML = 'circo';
		}
	}
	else{
		if (Number(input_edad.value) < 14) {
			h1_resultado.innerHTML = 'circo';
		}
		else{
			h1_resultado.innerHTML = 'montaña rusa';
		}
	}
}
btn_resultado.addEventListener('click',funcion1);