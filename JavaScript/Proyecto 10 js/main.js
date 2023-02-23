let listaAlumnos = ['Santiago', 'Fernando', 'Murguia', 'Maldonado'];
let texto = '';
let btn_1 = document.getElementById('btn1');
let inputNombre = document.getElementById('nombre');
let box_1 = document.getElementById('alumnos');

crearAlumno = function(alumno){
let p = document.createElement('p');
texto = document.createTextNode(alumno);
p.appendChild(texto);
box_1.append(p);
}
for (var i = 0; i < listaAlumnos.length; i++) {
	crearAlumno(listaAlumnos[i]);
}

btn_1.addEventListener('click', ()=>{crearAlumno(inputNombre.value)});
