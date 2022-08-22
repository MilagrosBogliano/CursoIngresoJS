//Bogliano Milagros Vanesa, Ejercicio 8.
function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;
	
	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			mensaje =  "frio";
		break;
		case "Mar del plata":
		case "Cataratas":
			mensaje = "calor";
		break;
	}
	alert("Hace " + mensaje);
}