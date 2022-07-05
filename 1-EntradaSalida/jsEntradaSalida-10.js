/* Bogliano Milagros Vanesa, Ejercicio 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;
	let aumento;

	importe	= parseInt(document.getElementById("txtIdImporte").value);
	
	aumento = (importe * 25)/100;
	resultado = importe - aumento; 

	document.getElementById("txtIdResultado").value = resultado;
}
