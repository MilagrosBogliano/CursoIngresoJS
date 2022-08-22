//Bogliano Milagros Vanesa, Ejercicio 3.
function mostrar()
{
	let mesDelAno;

	mesDelAno = document.getElementById("txtIdMes").value;

	switch(mesDelAno){
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
		break;
		default:
			alert("Este mes tiene 30 o más días");	
	}

}