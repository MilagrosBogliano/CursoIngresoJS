//Bogliano Milagros Vanesa, Ejercicio 4.
function mostrar()
{
	let mesDelAno;

	mesDelAno = document.getElementById("txtIdMes").value;

	switch(mesDelAno){
		case "Febrero":
			alert("Este mes tiene 28 días");
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días");
		break;
		default:
			alert("Este mes tiene 31 días");	
	}

}

