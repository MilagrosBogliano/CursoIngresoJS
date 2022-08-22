//Bogliano Milagros Vanesa, Ejercicio 2.
function mostrar()
{
	let mesDelAno;

	mesDelAno = document.getElementById("txtIdMes").value;

	switch(mesDelAno){
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
		break;
		default:
			alert("Falta para el invierno.");
		
	}

}