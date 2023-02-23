let alert1 = document.getElementById('alert1');
let btn1 = document.getElementById('btn1');

alerta = function(){
	alert1.style.display = 'block';
}

btn1.addEventListener('click', alerta)