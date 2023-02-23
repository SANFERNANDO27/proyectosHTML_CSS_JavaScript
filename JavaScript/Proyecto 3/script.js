let var_btn = document.getElementById("btn1");
let var_txt = document.getElementById("txt");
let var_btn2 = document.getElementById('btn2');
let var_btn3 = document.getElementById('btn3')

funcion1 = function(){
	var_txt.style.color = 'red';
	var_txt.style.fontSize = '20px';
	var_txt.style.backgroundColor = 'blue';
	var_txt.style.padding = '20px';
};
var_btn2.onclick = function(){
	var_txt.style.color = 'green';
	var_txt.style.backgroundColor = 'orange';
	var_txt.style.fontSize = '40px';
};
funcion2 = function(){
	var_txt.style.color = 'blue';
	var_txt.style.backgroundColor = 'brown';
	var_txt.style.fontSize = '30px';
	var_txt.style.padding = '40px';
};
funcion3 = function(){
	var_btn.style.cssText = 'color : red; background-color : blue';
};
funcion4 = function(){
	var_btn3.setAttribute('class', 'botonesbonitos')
};

var_btn.addEventListener('click',funcion3);
var_btn2.addEventListener('mouseover' ,funcion2);
var_btn3.addEventListener('click' ,funcion4);


