/* Milagros Vanesa Bogliano, Ejercicio 9.*/
function mostrar()
{
	let numeroUno = 5;
	let numeroDos = 10;
	let numeroTres = 15;

	if(numeroUno < numeroDos && numeroUno < numeroTres){
		alert("El numero mas chicos es el numero uno: " + numeroUno);
	}else if(numeroDos < numeroUno && numeroDos < numeroTres){
		alert("El numero mas chicos es el numero dos: " + numeroDos);
	} else{
		alert("El numero mas chicos es el numero tres: " + numeroTres);
	}
	/*let numero; 
	let maximo = 10;
	let minimo = 1;
	
	numero = Math.round(Math.random()*(maximo - minimo) + minimo);

	alert(numero);*/
	
}
