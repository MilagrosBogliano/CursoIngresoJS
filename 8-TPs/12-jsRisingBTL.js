/* Bogliano Milagros Vanesa, TP 12/
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	let edad;
	let sexo;
	let textoSexo;
	let estadoCivil;
	let estadoCivilTexto;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;
	let textoNacionalidad;
	let respuesta;
	do{
		do {
			edad = prompt("Ingrese su edad entre 18 y 90 años");
			edad = parseInt(edad);
		}while(isNaN(edad) || (edad <= 18 || edad >= 90));
		
		do {
			sexo = prompt("Ingrese su sexo. F/M");
			sexo = sexo.toUpperCase();
		}while(sexo != 'M' && sexo != 'F');
		switch (sexo) {
			case 'M':
				textoSexo = "Masculino";
			break;
			case 'F':
				textoSexo = "Femenino";
			break;
		}
		do{
			estadoCivil = prompt("Ingrese su estado civil. 1- Soltero, 2- Casado, 3- Divorciado, 4- Viudo");
			estadoCivil = parseInt(estadoCivil);
			
		}while(isNaN(estadoCivil)|| (estadoCivil < 1 || estadoCivil > 4));
		switch (estadoCivil) {
			case 1:
				estadoCivilTexto = "Soltero";
			break;
			case 2:
				estadoCivilTexto = "Casado";
			break;
			case 3:
				estadoCivilTexto = "Divorciado";
			break;
			case 4:
				estadoCivilTexto = "Viudo";
			break;
		}
		do{
			sueldoBruto =  prompt("Ingrese su sueldo bruto, no menor a 8000.");
			sueldoBruto = parseFloat()	
		}while(isNaN(sueldoBruto) || sueldoBruto <= 8000);
		do{
			numeroLegajo = parseInt(prompt("Ingrese su numero de legajo. 4 cifras, sin ceros a la izquierda."));
		}while(isNaN(numeroLegajo) && (numeroLegajo <1000 || numeroLegajo >9999));
		do{
			nacionalidad = prompt("Ingrese su nacionalidad. A- Argentino, E- Extranjeros, N- Nacionalizado.");
			nacionalidad = nacionalidad.toUpperCase();
		}while (nacionalidad != 'A' && nacionalidad != 'E' && nacionalidad != 'N');
		switch (nacionalidad) {
			case 'A':
				textoNacionalidad = "Argentino";
			break;
			case 'E':
				textoNacionalidad = "Extranjero";
			break;
			case 'N':
				textoNacionalidad = "Nacionalizado";
			break;
		} 
		
		respuesta = prompt("Desea seguir ingresando datos? S/N");
	}while(respuesta == 'S');
	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = textoSexo;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilTexto;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = numeroLegajo;
	document.getElementById("txtIdNacionalidad").value = textoNacionalidad;

}
