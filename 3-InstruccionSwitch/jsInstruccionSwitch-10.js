//Bogliano Milagros Vanesa, ejercicio 10.
function mostrar()
{
	let destino;
	let estacion;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch(estacion){
		case "Invierno":
		switch(destino){
			case "Bariloche":
				mensaje = "Si";
			break;
			default:
				mensaje = "No";
			break;
		}
		break;
		case "Verano":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Si";
				break;
				default:
					mensaje = "No";
				break;
			}
		break;
		case "Otoño":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
				case "Bariloche":
				case "Cordoba":
					mensaje = "Si";
				break;
				
			}
		break;
		case "Primavera":
			switch(destino){
				case "Bariloche":
				mensaje = "No";
			break;
			default:
				mensaje = "Si";
			break;
			}
		break;
	}
	alert(mensaje + " viaja.");
}