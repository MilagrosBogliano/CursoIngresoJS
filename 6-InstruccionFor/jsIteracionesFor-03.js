/* Bogliano Milagros Vanesa, Ejercicio 3.
Al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA" */
function mostrar()
{
	let repetciones;
	let i;

	repetciones = prompt("Ingrese la cantidad de repeticiones");
	
	for(i = 0; i <= repetciones; i ++){
		document.write("<br>" + "Hola UTN FRA");
	}
}