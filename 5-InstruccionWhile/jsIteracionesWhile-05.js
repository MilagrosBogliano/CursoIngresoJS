/* Bogliano Milagros Vanesa, Ejercicio 5.
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	
	do{
	sexo = prompt("ingrese f ó m .");
	document.getElementById("txtIdSexo").value = sexo;
	} while(sexo != "f" && sexo != "m");

}