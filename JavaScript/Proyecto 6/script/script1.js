function lapiz(medida, color, tipodepunta){
		this.medida = medida;
		this.color = color;
		this.tipodepunta = tipodepunta;
		this.getMedida = function(){
			return this.medida;
		}
}

let lapiz1 = new lapiz('2','azul','fina');
let lapiz2 = new lapiz('2 y medio','amarillo', 'redonda');

console.log(lapiz1);
console.log(lapiz2);
console.log(lapiz2.getMedida());

function alumno(iq, complexion, tamaño, personalidad){
	
	this.iq = iq;
	this.complexion = complexion;
	this.tamaño = tamaño;
	this.personalidad = personalidad;



}
let alumno1 = new alumno('160','endomorfo','1.78','introvertido');
let alumno2 = new alumno('110','mesoformo','1.90','extrovertido');

console.log(alumno1);
console.log(alumno2);
