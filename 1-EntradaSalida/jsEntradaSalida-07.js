/* Bogliano Milagros Vanesa. Ejercicio 7.
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let suma;
	let mensaje;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = numeroUno + numeroDos;
	mensaje = "La suma de los numeros es " + suma;

	alert(mensaje);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resta;
	let mensaje;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);


	resta = numeroUno - numeroDos;
	mensaje = "La resta de los numeros es " + resta;

	alert(mensaje);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let multiplicar;
	let mensaje;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);


	multiplicar = numeroUno * numeroDos;
	mensaje = "La multiplicacion de los numeros es " + multiplicar;

	alert(mensaje);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let division;
	let mensaje;
	
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);


	division = numeroUno / numeroDos;
	mensaje = "La division de los numeros es " + division;

	alert(mensaje);
}

