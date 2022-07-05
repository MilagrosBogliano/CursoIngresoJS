/* Bogliano Milagros Vanesa, Ejercicio 6.
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

