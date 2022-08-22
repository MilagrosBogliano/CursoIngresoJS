function mostrar()
{ /*Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor ,
hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validar("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo de alimento más caro.
d) El promedio de precio por kilo en total. */
    let peso;
    let precioPorKilo;
    let tipo;
    let respuesta;
    let pesoTotal;
    let promedio = 0;
    let precioFinal = 0;
    let descuento = 0;
    let alimentoMax = 0;
    let bandera = 0;

   do{
        do{
            peso = prompt("Ingrese el peso en kilos, entre 10 y 1000 kilos.");
            peso = parseFloat(peso);
        }while(isNaN(peso) || (peso < 9 || peso > 1001));
        
        pesoTotal = pesoTotal + peso;

        do{
            precioPorKilo = prompt("Ingrese el precio por kilo");
            precioPorKilo = parseFloat(precioPorKilo);
            precioFinal = precioFinal + precioPorKilo;
         }while(isNaN(precioPorKilo) && precioPorKilo !=0);

        do{
            tipo = prompt("Ingrese el tipo de alimento. V (vegetal)/A (animal)/M (mezcla)");
            tipo = tipo.toUpperCase();
        }while(tipo !='V' && tipo !='A' && tipo !='M');
        
        if(bandera == 0){
			alimentoMax = tipo;
			bandera = 1; 
		}else if(tipo < alimentoMax){
				alimentoMax = tipo;
            }
            
        respuesta = prompt("Desea seguir ingresando datos? S/N");
    }while(respuesta == "S");

    if(pesoTotal > 100){
        descuento = (precioFinal * 15)/100; 
        precioFinal = precioFinal - descuento;
        alert("El precio final es de: " + precioFinal);
    }else if(pesoTotal > 300){
        descuento = (precioFinal * 25)/100; 
        precioFinal = precioFinal - descuento;
        alert("El precio final es de: " + precioFinal);
    }
    promedio = precioFinal / pesoTotal;

    alert("El promedio es: " + promedio);
    alert("El precio total sin descuento es: " + precioFinal);
    alert("El tipo de alimento mas caro es : " + alimentoMax);

   
   
   
   
   
   
    /*let i;
    let nota;
    let sexo;
	let notaMin;
    let sexoMin;
    let suma = 0;
    let promedio = 0;
	let bandera = 0;
    let cantVarones = 0;

     for(i = 0; i < 5; i++){
        do{
            nota = prompt("Ingrese su nota entre 0 a 10");
            nota = parseFloat(nota);
        }while(isNaN(nota) || (nota <= 0 || nota > 11));
        
        do {
            sexo = prompt("Ingrese su sexo. F/M");
            sexo = sexo.toUpperCase();
        }while(sexo != 'M' && sexo != 'F');
        suma = suma + nota;

        if(bandera == 0){
			notaMin = nota;
            sexoMin = sexo;
			bandera = 1; 
		}else if(nota < notaMin){
				notaMin = nota;
                sexoMin = sexo;
            }
        if(sexo == 'M' && nota >= 6){
            cantVarones++;
        }
    }
    promedio = suma /5;
    alert("El promedio de las notas es: " + promedio);
    alert("La nota mas baja es: " + notaMin + " el sexo de esa persona es: " + sexoMin);
    alert("La cantidad de varones con la nota mayor o igual a 6 es de: " + cantVarones)*/
}
