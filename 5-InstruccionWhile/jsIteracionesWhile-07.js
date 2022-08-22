/* Bogliano Milagros Vanesa, Ejercicio 7.
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let respuesta;
	let promedio;
	let i = 0;
	let acumulador = 0;
	
	do{
		numero = parseFloat(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		i = i + 1;
		respuesta = prompt("Desea seguir ingresando numeros? s/n");
	}while(respuesta == "s");
	
	promedio = acumulador / i;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio.toFixed(2);
}