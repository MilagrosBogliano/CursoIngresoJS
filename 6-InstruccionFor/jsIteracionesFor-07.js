/* Bogliano Milagros Vanesa, Ejercicio 7 
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados. */
function mostrar()
{
	let i; 
	let numero;
	let div = 0;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	for(i = 0; i<= numero; i++){
		if((numero % 1) == 0){
			document.write("<br> numero divisor: " + i);
			div++;
		}
	}
	document.write("<br> Cantidad de numeros" + div);
}