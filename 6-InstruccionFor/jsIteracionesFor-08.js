//Bogliano Milagros Vanesa, Ejercicio 8.
function mostrar()
{
	let numero;
	let i;
	let numeroPrimo = 0;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);
	
	for(i = 0; i<= numero; i++){
		if(numero % i == 0){
			numeroPrimo++;
		} 
	}
	if(numeroPrimo == 2){
		document.write("<br> El numero " + numero + " es primo");
	}else{
		document.write("<br> El numero " + numero + " no es primo");
	}
}