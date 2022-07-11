/* Bogliano Milagros Vanesa, Ejercicio 5. */
function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad <= 12 || edad >= 18){
		alert("No sos adolescente.");
	} 
}