/* Bogliano Milagros Vanesa, Ejercicio 9.
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let numeroMax;
	let numeroMin;
	let bandera = 0;
	let respuesta = "s";

	while(respuesta == "s"){
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
	
		if(bandera == 0){
			numeroMin = numeroIngresado;
			numeroMax = numeroIngresado;
			bandera = 1; 
		}else if(numeroIngresado > numeroMax){
				numeroMax = numeroIngresado;
			}else if(numeroIngresado < numeroMin){
				numeroMin = numeroIngresado;
			}
		
			respuesta = prompt("Quiere ingresat otro numero? s/n");
		}

	document.getElementById("txtIdMaximo").value = numeroMax;
	document.getElementById("txtIdMinimmo").value = numeroMin;
}

	