/* Milagros Vanesa Bogliano, Ejercicio 10.*/
function mostrar()
{
	let nota; 
	let maximo = 10;
	let minimo = 1;
	
	nota = Math.round(Math.random()*(maximo - minimo) + minimo);

	if(nota >=9){
		alert( nota + " EXCELENTE");
	}else if(nota >= 4){
		alert(nota +" APROBO");
	}else{
		alert(nota + " VAMOS QUE LA PROXIMA SE PUEDE");
	}
}