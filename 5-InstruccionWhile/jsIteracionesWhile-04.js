/* Bogliano Milagros Vanesa, Ejercicio 4.
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	do{
		numero = parseInt(prompt("ingrese un número entre 0 y 10."));
		document.getElementById("txtIdNumero").value = numero;
	} while(numero >= 10);

	
}