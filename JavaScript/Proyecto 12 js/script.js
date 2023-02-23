let p1 = document.getElementById('p1')
let boton = document.getElementById('btn_enviar');
validar = function(){
	nombre = document.getElementById('nombre').value;
	nombreEr = /^[A-Za-z]{2,20}\s?[A-Za-z]{2,20}$/;
	console.log(nombreEr.test(nombre)); 
	console.log(nombre);
	edad = document.getElementById('edad').value
	edadER = /^[1-9][0-9]{0,2}$/;
	console.log(edadER.test(edad)); 
	console.log(edad);
	if (nombreEr.test(nombre)) {
		window.alert('Tu nombre es correcto')
		document.getElementById('p_nombre').style.visibility = 'hidden';
		document.getElementById('nombre').style.borderColor = 'black'
	}else{
		document.getElementById('p_nombre').style.visibility = 'visible';
		document.getElementById('nombre').style.borderColor = 'red'
	}
	if (edadER.test(edad)) {
		window.alert('Tu edad es correcta')
		document.getElementById('p_edad').style.visibility = 'hidden';
		document.getElementById('edad').style.borderColor = 'black'
	}else{
		document.getElementById('p_edad').style.visibility = 'visible';
		document.getElementById('edad').style.borderColor = 'red'
}
	return false;
}
funcion1 = function(){
	let p_nombre = document.getElementById('p_nombre');
	let p_edad = document.getElementById('p_edad');
	let nombre = p_nombre.value
	p1Text = 'hola '+ nombre + 'tu edad es: ' + p_edad.value;
	p1.innerHTML = p1Text
	console.log(p_nombre.value);
	console.log(p_edad.value);
}
boton.addEventListener('click', funcion1)