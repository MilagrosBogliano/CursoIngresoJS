/* Bogliano Milagros Vanesa, Ejercicio 8.
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let respuesta;
	let sumaPositivos = 0;
	let multiplicacionNegativos = 1;
	let vecesNeg = 0;
	
	while(respuesta == "s"){
		numero = parseFloat(prompt("Ingrese un numero"));
		if(numero > 0){
			sumaPositivos = sumaPositivos + numero;
		}else {
			vecesNeg = vecesNeg + 1;
			multiplicacionNegativos = multiplicacionNegativos * numero;
		}
		respuesta = prompt("Desea seguir ingresando numeros? s/n");
	} 
	if(vecesNeg == 0){
		multiplicacionNegativos;
	}
	document.getElementById("txtIdSuma").value= sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}