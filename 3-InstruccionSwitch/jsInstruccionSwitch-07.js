//Bogliano Milagros Vanesa, Ejercicio 7.
function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;
	
	switch(destino){
		case "Bariloche":
			alert("Se encuentra al Oeste de nuestro pais");
		break;
		case "Ushuaia":
			alert("Se encuentra al Sur de nuestro pais");
		break;
		case "Cataratas":
			alert("Se encuentra al Norte de nuestro pais");
		break;
		case "Mar del plata":
			alert("Se encuentra al Este de nuestro pais");
		break;
	}
}