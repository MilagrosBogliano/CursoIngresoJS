/* Bogliano Milagros Vanesa
Realizar el algoritmo que permita ingresar los datos de los alumnos de una 
division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota
*/
function mostrar()
{
	let nombre;
	let tipoCursada;
	let cantidadDeMaterias;
	let sexo;
	let notaPromedio;
	let edad;
	let respuesta;
	let bandera = 0;
	let mejorPromedio = 0;
	let nombreMejorPromedio = 0;
	let contMasculino = 0; 
	let contFemenino = 0; 
	let contNoBinario = 0;


	do{
		nombre = prompt("Ingrese el nombre del tipoCursada");

		do{
			tipoCursada = prompt("Ingrese el tipo de cursada. LIBRE, PRESENCIAL o REMOTA");
			tipoCursada = tipoCursada.toUpperCase();
		}while(tipoCursada != "LIBRE" && tipoCursada != "PRESENCIAL" && tipoCursada != "REMOTA");
 
		do{
			cantidadDeMaterias = prompt("Ingrese la cantidad de materias. Mas de cero y menos de 8");
			cantidadDeMaterias = parseFloat(cantidadDeMaterias);
		}while(isNaN(cantidadDeMaterias) || (cantidadDeMaterias < 0 || cantidadDeMaterias > 8));

		do{
			sexo = prompt("Ingresar su sexo. F (Femenino) /M (Masculino)/ NB(No Binario)");
			sexo = sexo.toUpperCase();
		}while (sexo != 'M' && sexo != 'F' && sexo != 'NB');

		do{
			notaPromedio = prompt("Ingrese la nota Promedio. Entre 0 y 10");
			notaPromedio = parseFloat(notaPromedio);
		}while(isNaN(notaPromedio) || (notaPromedio < 0 || notaPromedio > 10));

	do{
		edad = prompt("Ingrese su edad entre 18 y 100.)");
		edad = parseInt(edad);
	}while(isNaN(edad) || (edad < 18 || edad > 100));

	if(bandera == 0){
		mejorPromedio = notaPromedio;
		nombreMejorPromedio = nombre;
		bandera = 1;
	}else if(notaPromedio > mejorPromedio){
		mejorPromedio = notaPromedio;
		nombreMejorPromedio = nombre;
	}
	
	respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
	}while(respuesta == 'S');

}







/* Practica de parcial 28/07/22
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
-el nombre del tipoCursada 
-el tipo de tipoCursada (validar "LIBRE", "PRESENCIAL" o "REMOTA"),
-el cantidadDeMaterias (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
-el tipo de inflamable("ignífugo", "combustible", "explosivo" ) 
-y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de tipoCursada
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de PRESENCIAL con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/

/*
	let i;
	let nombre;
	let tipoCursada;
	let cantidadDeMaterias;
	let tipo;
	let marca;
	let cantidadTipoProducto;
	let cantidad;
	let contAlcohol;
	let contIac;
	let contQuat;
	let cantidadAlcohol;
	let cantidadQuat;
	let cantidadIac;
	let cantidadIacMin;
	let promedio = 0;
	let precioMax = 99;
	

	for(i = 0; i < 5; i++){
		nombre = prompt("Ingrese el nombre del tipoCursada");
	
		do{
			tipoCursada = prompt("Ingrese el tipoCursada de tipoCursada. LIBRE, PRESENCIAL o REMOTA");
			tipoCursada = tipoCursada.toUpperCase();
		}while(tipoCursada != "LIBRE" && tipoCursada != "PRESENCIAL" && tipoCursada != "REMOTA");

		do{
			cantidadDeMaterias = prompt("Ingrese el cantidadDeMaterias del tipoCursada. Entre 100 y 300.");
			cantidadDeMaterias = parseFloat(cantidadDeMaterias);
		}while(isNaN(cantidadDeMaterias) || (cantidadDeMaterias <100 || cantidadDeMaterias >300));

		do{
			cantidad = prompt("Ingrese la cantidad de productos. Maximo 1000 unidades.");
			cantidad = parseInt(cantidad);
		}while(isNaN(cantidad) || (cantidad > 1001 && cantidad !=0));


		do{
			tipo = prompt("Ingrese el tipo de tipoCursada. INFLAMABLE, COMBUSTIBLE o EXPLOSIVO");
			tipo = tipo.toUpperCase();
		}while(tipo != "INFLAMABLE" && tipo != "COMBUSTIBLE" && tipo != "EXPLOSIVO");

		marca = prompt("Ingrese la marca del tipoCursada");

		switch(tipoCursada){
			case "LIBRE":
				cantidadAlcohol = cantidadAlcohol + cantidad;
				contAlcohol++;
			break;
			case "PRESENCIAL":
				cantidadIac = cantidadIac + cantidad;
				contIac++;
				if(cantidadDeMaterias <= 200){
					cantidadIacMin = cantidadIacMin + cantidad;
				}
			break;
			case "REMOTA":
				cantidadQuat =  cantidadQuat + cantidad;
				contQuat++;
			break;
		}ACA VA EL OTRO SWITCh

	}	

	Los if para mostrar los puntos;
	

	document.write("<br> El promedio de cantidad por tipo de tipoCursada es: " + promedio + ".");
	document.write("<br> El tipo de inflamable con más cantidad de unidades en total de la compra es: " + tipoMax + ", " + cantidadMax + "." );
	document.write("<br> En total se compraron " + cantidadIac + " de PRESENCIAL con precios menor o igual a 200.");
 	document.write("<br> La marca y tipo del más caro de los productos es: " + marcaMax + ", "+ tipoMax + ".");
 */

/* Parcial 2020
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el cantidadDeMaterias (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
/*let i;
	let tipo;
	let cantidadDeMaterias;
	let cantidad = 0;
	let marca;
	let fabricante;
	let alcoholMin = 0;
	let fabricanteMin = 0;
	let cantidadMin = 0;
	let bandera = 0;

	for(i = 0; i < 5; i++){
		do{
			tipo = prompt("Ingrese el tipo de tipoCursada. barbijo, jabon o alcohol");
			tipo = tipo.toLowerCase();
		}while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol");

		do{
			cantidadDeMaterias = prompt("Ingrese el cantidadDeMaterias del tipoCursada. Entre 100 y 300.");
			cantidadDeMaterias = parseFloat(cantidadDeMaterias);
		}while(isNaN(cantidadDeMaterias) || (cantidadDeMaterias <100 || cantidadDeMaterias >300));

		do{
			cantidad = prompt("Ingrese la cantidad de productos. Maximo 1000 unidades.");
			cantidad = parseInt(cantidad);
		}while(isNaN(cantidad) || (cantidad > 1001 && cantidad !=0));

		marca = prompt("Ingrese la marca del tipoCursada");
		fabricante = prompt("Ingrese el fabricante de tipoCursada");

		if(bandera == 0){
			alcoholMin = cantidadDeMaterias;
			cantidadMin = cantidad;
			fabricanteMin = fabricante;
			bandera = 1; 
		}else if(tipo < alcoholMin){
			alcoholMin = cantidadDeMaterias;
			cantidadMin = cantidad;
			fabricanteMin = fabricante;
            }
	}
	document.write("<br> El alcohol mas barato es de: " + alcoholMin + " la cantidad es de: " + cantidadMin + " y el fabricante es: " + fabricanteMin);
	*/