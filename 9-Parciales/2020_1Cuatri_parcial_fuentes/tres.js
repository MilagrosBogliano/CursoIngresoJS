/*
2)De 10 alumnos que ingresan a la Facultad se deben tomar y validar los siguientes datos:

nombre, edad, nota y sexo.

a)el nombre de la mujer con mas nota(si la hay)

b)la edad promedio en total

c)informar la cantidad de alumnos de sexo masculino.

Pedir datos por prompt y mostrar por document.write */
function mostrar()
{ 
	let nombre;
	let edad;
	let nota;
	let sexo;
	let bandera = 0;
	let notaMax = 0;
	let nombreMax;
	let suma = 0;
	let promedioEdad = 0;
	let contadorEdad = 0;
	let contadorMasculino = 0;

	for(i = 0; i < 10; i++){
		nombre = prompt("Ingrese su nombre");

		do{
			edad = prompt("Ingrese su edad entre 18 y 100 años.");
			edad = parseInt(edad);
		}while(isNaN(edad) || (edad < 17 || edad > 100));

		do{
			nota = prompt("Ingrese su nota entre 0 y 10.");
			nota = parseInt(nota);
		}while(isNaN(nota) || (nota < 0 || nota > 11));

		do{
			sexo = prompt("Ingresar su sexo. F (Femenino) /M (Masculino)/ NB(No Binario)");
			sexo = sexo.toUpperCase();
		}while(sexo != 'M' && sexo != 'F' && sexo !='NB');

		if(sexo =="F"){  
			if(bandera == 0){
			notaMax = nota;
			nombreMax = nombre;
			bandera = 1; 
			}else if(nota > notaMax){
				notaMax = nota;
				nombreMax = nombre;
			}
		}
		if(edad != 0){
			contadorEdad++;
			suma = suma + edad;
			promedioEdad = suma/ contadorEdad;
		}

		if(sexo == 'M'){
			contadorMasculino++;
		}

	}

	document.write("a) La mujer con el mejor promedio es: " + nombreMax + "<br>");
	document.write("b) La edad promedio en total es: " + promedioEdad + "<br>");
	document.write("c) La cantidad de alumnos de sexo masculino es: " + contadorMasculino + "<br>");
	



		
		


/*         PARCIAL
1)De 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.

a)informar la cantidad de personas de sexo femenino.

b)la altura promedio en total

c)el nombre del hombre con menos peso(si lo hay)

Pedir datos por prompt y mostrar por document.write 

let i;
	let nombre;
	let altura;
	let sexo;
	let peso;
	let contadorFemenino = 0;
	let contadorAltura = 0;
	let suma = 0;
	let promedioAltura = 0;
	let pesoMin = 0;
	let nombreMin = 0;
	let bandera = 0;

	for(i = 0; i < 5; i++){
		nombre = prompt("Ingrese su nombre");

		do{
			altura = prompt("ingrese su altura");
			altura = parseFloat(altura);
		}while(isNaN(altura) && altura != 0);

		do{
			peso = prompt("Ingrese su peso.)");
			peso = parseFloat(peso);
		}while(isNaN(peso) && peso != 0);

		do{
			sexo = prompt("Ingresar su sexo. F (Femenino) /M (Masculino).");
			sexo = sexo.toUpperCase();
		}while(sexo != 'M' && sexo != 'F');

		if(sexo == 'F'){
			contadorFemenino++;
		}

		if(altura != 0){
			contadorAltura++;
			suma = suma + altura;
			promedioAltura = suma /contadorAltura;
		}

		if(bandera == 0){
			pesoMin = peso;
			nombreMin = nombre;
			bandera = 1; 
			}else if(peso < pesoMin){
				pesoMin = peso;
			}

	}

	document.write("a) La cantidad de personas del sexo femenino son: " + contadorFemenino + "<br>");
	document.write("b) La altura promedio en total es de: " +promedioAltura + "<br>");
	document.write("c) El nombre del hombre con menor peso es: " + nombreMin + "<br>");*/
	


	/*2)De una compra debes ingresar una cantidad indeterminada de productos, validando los siguientes datos:

nombre de producto, precio, unidades, tipo(minorista o mayorista)

a)informar el precio total de la compra.

b)el nombre del producto más caro de tipo minorista

c)el nombre del producto con menos unidades

let nombre;
	let precio;
	let tipo;
	let unidades;
	let respuesta; 
	let precioFinal = 0;
	let precioMax = 0;
	let nombreMax = 0;
	let bandera = 0;
	let unidadesMin = 0;
	let nombreUnidadesMin = 0;	
	do {   
		
		nombre = prompt("Ingrese el nombre del producto");

		do{
			precio = prompt("Ingrese el precio");
			precio = parseFloat(precio);
		}while(isNaN(precio) && precio !=0);	

		precioFinal = precioFinal + precio;
	
		do{
			unidades = prompt("Ingrese las unidades.");
			unidades = parseInt(unidades);
		}while(isNaN(unidades) && unidades !=0);

		do{
			tipo= prompt("Ingresar el tipo: MINORISTA / MAYORISTA.");
			tipo = tipo.toUpperCase();
		   }while (tipo != "MINORISTA" && tipo != "MAYORISTA");

		
		if(tipo =="MINORISTA"){  
			if(bandera == 0){
			precioMax = precio;
			nombreMax = nombre;
			bandera = 1; 
			}else if(precio > precioMax){
				precioMax = precio;
				nombreMax = nombre;
			}
		}
		if(bandera == 0){
			unidadesMin = unidades;
			nombreUnidadesMin = nombre;
			bandera = 1; 
			}else if(unidades < unidadesMin){
				unidadesMin = unidades;
				nombreUnidadesMin = nombre;
			}
		
		
		respuesta = prompt("Desea seguir ingresando datos? S/N");
		respuesta = respuesta.toUpperCase();
		}while(respuesta == 'S');

		document.write("a) El precio total es de: "+ precioFinal + "<br>");
		document.write("b) El nombre del precio maximo es: "+ nombreMax + "<br>");
		document.write("c) El nombre de las unidades Minimo es: "+ nombreUnidadesMin + "<br>");

 */


		/*
3)Nos ingresan una cantidad indeterminada de estadías de vacaciones, validando los datos ingresados:

nombre del pasajero titular,destino ( “Brasil”, “Caribe” o “Europa”), temporada(“alta”,”baja”,“media”), cantidad de pasajeros que viajan.

informar:

a)el lugar destino elegido.

b)el nombre del pasajero titular que lleva menos pasajeros.

c)el promedio de personas, que viajan en temporada alta.
let nombre;
	let destino;
	let temporada;
	let cantidad;
	let bandera =0;
	let respuesta;
	let nombreMin = 0;
	let cantidadMin =0;
	let contadorTemporadaAlta =0;
	let promedio = 0;
	let suma = 0;
	

	do {      
		nombre = prompt("Ingrese el nombre del titular del viaje");

		do{
			destino = prompt("Ingrese el destino de su viaje. BRASIL, CARIBE o EUROPA");
			destino = destino.toUpperCase();
		}while(destino != "BRASIL" && destino != "CARIBE" && destino != "EUROPA");

		do{
			temporada = prompt("Ingrese la temporada. ALTA, BAJA o MEDIA");
			temporada = temporada.toUpperCase();
		}while(temporada != "ALTA" && temporada != "BAJA" && temporada != "MEDIA");

		do{
			cantidad = prompt("Ingrese la cantidad de pasajeros");
			cantidad = parseInt(cantidad);
		}while(isNaN(cantidad) && cantidad !=0);

		if(bandera == 0){
			cantidadMin = cantidad;
			nombreMin = nombre;
			bandera = 1; 
			}else if(cantidad < cantidadMin){
				cantidadMin = cantidad;
				nombreMin = nombre;
			}
		if(temporada =="ALTA"){
			contadorTemporadaAlta++;
			suma = suma + cantidad;
			promedio = suma / contadorTemporadaAlta;
		}
	

		respuesta = prompt("Desea seguir ingresando datos? S/N");
		respuesta = respuesta.toUpperCase();
		}while(respuesta == 'S');

		switch (destino) {
			case "BRASIL":
				document.write("a) El destino elegido es: " + destino+ "<br>");
			break;
			case "CARIBE":
				document.write("a) El destino elegido es: " + destino+ "<br>");
			break;
			case "EUROPA":
				document.write("a) El destino elegido es: " + destino+ "<br>");
			break;
		}
		
		document.write("b) El pasajero que menos gente lleva es: " + nombreMin + "<br>");
		document.write("c) El promedio de personas que viajan en temporada ALTA es de: " + promedio);

 */


		/*  RECUPERATORIO
1)De un cine se deben ingresar una cantidad indeterminada de venta de entradas diaria, validando los siguientes datos:

nombre de película, precio, cantidad de entradas, tipo(3D o 4D)

a)el nombre de la película más cara de tipo 4D.

b)informar el precio total de la venta del día.

c)el nombre de la película con menos cantidad de entradas. 

	let nombre;
	let precio;
	let cantidad;
	let tipo;
	let bandera = 0;
	let precioMax = 0;
	let nombreMax = 0;
	let precioTotal =0;
	let suma = 0;
	let cantidadMin = 0;
	let nombreMin = 0;
	
	do {     
		
		nombre = prompt("ingrese el nombre de la pelicula");

		do{
			precio = prompt("Ingrese el precio");
			precio = parseFloat(precio);
		}while(isNaN(precio) && precio !=0);
		do{
			cantidad = prompt("Ingrese la cantidad de entradas");
			cantidad = parseInt(cantidad);
		}while(isNaN(cantidad) && cantidad !=0);

		do{
			tipo= prompt("Ingresar el tipo: 3D / 4D.");
			tipo = tipo.toUpperCase();
		}while (tipo != "3D" && tipo != "4D");

		if(tipo =="4D"){  
			if(bandera == 0){
			precioMax = precio;
			nombreMax = nombre;
			bandera = 1; 
			}else if(precio > precioMax){
				precioMax = precio;
				nombreMax = nombre;
			}
		}

		if(bandera == 0){
			cantidadMin = cantidad;
			nombreMin = nombre;
			bandera = 1; 
			}else if(cantidad < cantidadMin){
				cantidadMin = cantidad;
				nombreMin = nombre;
			}


		suma = precio * cantidad;
		precioTotal = precioTotal + suma;

		respuesta = prompt("Desea seguir ingresando datos? S/N");
		respuesta = respuesta.toUpperCase();
		}while(respuesta == 'S');

		document.write("a) El nombre de la pelicula mas cara 4D es: "+ nombreMax + "<br>");
		document.write("b) El precio total por dia es de: "+ precioTotal + "<br>");
		document.write("c) El nombre de la película con menos cantidad de entradas es:  "+ nombreMin + "<br>");*/



	/*let sexo;
	let nombre;
	let peso;
	let destino;
	let temperatura;
	let respuesta;
	let nombreMax = 0;
	let bandera = 0;
	let temperaturaMax = 0;
	let contadorViudos = 0;
	let contadorMasculino = 0;
	let contadorTerceraEdad = 0;
	let contadorCantidadHombres = 0;
	let suma = 0;
	let promedioEdad = 0;
	
	do {       
		nombre = prompt("ingrese su nombre.");
		
		do{
			peso = prompt("ingrese su peso");
			peso = parseInt(peso);
		}while(isNaN(peso) || (peso < 0 || peso > 100));

		do{
			sexo = prompt("Ingresar su sexo. F (Femenino) /M (Masculino)");
			sexo = sexo.toUpperCase();
		}while(sexo != 'M' && sexo != 'F');
		
		do{
			destino = prompt("Ingrese su estado civil.  SOLTERO, CASADO, VIUDO");
			destino = destino.toUpperCase();
		}while(destino != "SOLTERO" && destino != "CASADO" && destino != "VIUDO");

		do{
			temperatura = prompt("Ingrese su temperatura personal");
		}while(isNaN(temperatura) && temperatura !=0);

		if(peso >17 && destino == "VIUDO"){
			contadorViudos ++;
		}
		
		if(peso >60 && temperatura > 38){
			contadorTerceraEdad++;
		}

		if(sexo == 'M'){
			switch(destino){
				case "SOLTERO":
				case "VIUDO":
					contadorMasculino++;
				break;
			}
		}
		
		if(sexo == 'M' && destino == "SOLTERO"){
			contadorCantidadHombres++;
			suma = suma + peso;
			promedioEdad = suma / contadorCantidadHombres;
		}

		if(bandera == 0){
			temperaturaMax = temperatura;
			nombreMax = nombre;
			bandera = 1; 
			}else if(temperatura > temperaturaMax){
				temperaturaMax = temperatura;
				nombreMax = nombre;
			}

		respuesta = prompt("Desea seguir ingresando datos? S/N");
		respuesta = respuesta.toUpperCase(); 
		}while(respuesta == 'S');

		

		document.write("a) El nombre de la persona con mas temperatura es: " + nombreMax + "<br>");
		document.write("b) La cantidad de viudos mayores de peso son: " +contadorViudos + "<br>");
		document.write("c) La cantidad de hombres que hay solteros o viudos es: " +contadorMasculino + "<br>");
		document.write("d) La cantidad de personas de la tercera peso( mas de 60 años) que tienen mas de 38 de temperatura son: " + contadorTerceraEdad + "<br>");
		document.write("e) El promedio de la peso de todos los hombres solteros es de: " + promedioEdad);*/

}
