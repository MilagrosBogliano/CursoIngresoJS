/* Bogliano Milagros Vanesa, Ejercicio 6. */
function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad <= 12){
		alert("Sos un niño");
	}else if(edad <= 17){
		alert("Sos un adolescente");
	}else{
		alert("Sos mayor de 18 años");
	}
	/* SIN ANIDAR
	if(edad >= 18){
		alert("Sos mayor de 18 años");
	} if(edad >= 13 && edad <= 17){
		alert("Sos un adolescente");
	} if(edad <= 13){
		alert("Sos un niño");
	}*/
}