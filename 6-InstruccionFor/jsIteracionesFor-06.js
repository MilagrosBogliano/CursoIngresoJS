/* Bogliano Milagros Vanesa, Ejercicio 6.
Al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados. */
function mostrar()
{
	let i;
	let numero;
	let pares = 0;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	for(i = 0; i <= numero; i++){
		if((i % 2) == 0 ){
			document.write("<br> Numeros pares" + i);
			pares++;
		}
	}
	document.write("<br> EL total de numeros pares es de : " + pares);

}