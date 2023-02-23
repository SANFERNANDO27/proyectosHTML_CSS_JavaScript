let var_divprincipal = document.getElementById('divprincipal');
let var_btn1 = document.getElementById('btn1');
let var_btn2 = document.getElementById('btn2');
let var_div = document.getElementById('div');
let var_div1 = document.getElementById('div1');
let var_div2 = document.getElementById('div2');

onload = function(){
	var_divprincipal.style.borderTopWidth = '5px';
	var_divprincipal.style.borderColor = '#CCCCCC';
	var_divprincipal.style.borderStyle = 'solid';
	var_divprincipal.style.borderRadius = '5px';
	var_divprincipal.style.backgroundColor = '#F0D793';
	var_div.style.padding = '10px'
	var_div1.style.borderColor = '#CCCCCC';
	var_div1.style.borderTopStyle = 'solid';
	var_div1.style.borderTopWidth = '2px';
	var_div1.style.marginTop = '10px';
	var_div1.style.marginBottom = '10px'
	var_div1.style.padding = '10px'
	var_div2.style.borderColor = '#CCCCCC';
	var_div2.style.borderTopStyle = 'solid';
	var_div2.style.borderTopWidth = '2px';
	var_div2.style.padding = '10px';
};
FuncionBtn1 = function(){
	var_divprincipal.style.backgroundColor = 'blue';
};
FuncionBtn2 = function(){
	var_divprincipal.style.backgroundColor = 'red';
};


var_btn1.addEventListener('click' ,FuncionBtn1);
var_btn2.addEventListener('click' ,FuncionBtn2);