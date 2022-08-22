//Bogliano Milagros Vanesa, Ejercicio 6.
function mostrar()
{
	let numero;
	let i = 0;
	let acumulador = 0;
	let promedio;

	while( i < 5){
		i = i + 1;
		numero = parseFloat(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
	}

	promedio = acumulador / i;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}