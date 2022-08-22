//Bogliano Milagros Vanesa, Ejercicio 1.
function mostrar()
{
	let mesDelAno;

	mesDelAno = document.getElementById("txtIdMes").value;
	
	switch(mesDelAno){
		case "Enero":
			alert("que comiences bien el año!!!");
		break;
		case "Marzo":
			alert("a clases!!!");
		break;
		case "Julio":
			alert("se vienen las vacaciones!!!");
		break;
		case "Diciembre":
			alert("Felices fiesta!!!");
		break;
		/*default:
			alert("No tengo nada que decirte");*/
	}
	
}

/*if(mesDelAno == "Enero"){
		alert("que comiences bien el año!!!");
	}else if(mesDelAno == "Marzo"){
		alert("a clases!!!");
	}else if(mesDelAno == "Julio"){
		alert("se vienen las vacaciones!!!");
	}else if(mesDelAno == "Diciembre"){
		alert("Felices fiesta!!!");
	}*/