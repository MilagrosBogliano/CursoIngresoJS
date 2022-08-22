//Bogliano Milagros Vanesa, Ejercicio 9.
function mostrar()
{
	//Declaro variables
	let estacionIngresada;
	let destino;
	let precio;
	let descuento = 0;
	let aumento = 0;
	let precioFinalAumento;
	let precioFinalDescuento;
	let mensaje;

	precio = 15000;
	
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	precioFinalDescuento = precio - descuento;
	precioFinalAumento = precio + aumento;

	switch(estacionIngresada){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					aumento = (precio * 20)/100;
					precioFinalAumento = precio + aumento;
					mensaje = "El destino es " + destino + " en " + estacionIngresada + " y el precio final es "+ precioFinalAumento;
			}		
		break;
	}
	/*switch(estacionIngresada){
		case "Invierno":
			if(destino =="Bariloche"){
				aumento = (precio * 20)/100;
				precioFinalAumento = precio + aumento;
				mensaje = "El destino es " + destino + " en " + estacionIngresada + " y el precio final es "+ precioFinalAumento;
			}else if(destino == "Mar del plata"){
				descuento = (precio * 20)/100;
				precioFinalDescuento = precio - descuento;
				mensaje = "El destino es " + destino + " en " + estacionIngresada + " y el precio final es "+ precioFinalDescuento;
			}else{
				descuento = (precio * 10)/100;
				precioFinalDescuento = precio - descuento;
				mensaje = "El destino es " + destino + " en " + estacionIngresada + " y el precio final es "+ precioFinalDescuento;
			}
		break;
		case "Verano":
			if(destino =="Bariloche"){
				descuento = (precio * 20)/100;
				precioFinalDescuento = precio - descuento;
				mensaje = "El destino es " + destino + " en " + estacionIngresada + " y el precio final es "+ precioFinalDescuento;
			}else if(destino == "Mar del plata"){
				aumento = (precio * 20)/100;
				precioFinalAumento = precio + aumento;
				mensaje = "El destino es " + destino + " en " + estacionIngresada + " y el precio final es "+ precioFinalAumento;
			}else{
				aumento = (precio * 10)/100;
				precioFinalAumento = precio + aumento;
				mensaje = "El destino es " + destino + " en " + estacionIngresada + " y el precio final es "+ precioFinalAumento;
			}
		break;
		case "Otoño":
		case "Primavera":
			if(destino == "Cordoba"){
				mensaje = "El destino es " + destino + " en " + estacionIngresada + " y el precio final es "+ precio;
			}else {
				aumento = (precio * 10)/100;
				precioFinalAumento = precio + aumento;
				mensaje = "El destino es " + destino + " en " + estacionIngresada + " y el precio final es "+ precioFinalAumento;
			}
		break;
	}*/
	alert(mensaje);
}