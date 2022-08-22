function mostrar()
{
    let marca;
    let peso;
    let temperatura;
    let temperaturaPares = 0;
    let marcaMax = 0;
    let pesoMax = 0;
    let bandera = 0;
    let respuesta;
    do{
        marca = prompt("Ingrese la marca del producto");

        do{
            peso = prompt("Ingrese el peso del producto. Entre 1 y 100");
            peso = parseFloat(peso);
        }while(isNaN(peso) || (peso < 0 || peso > 101));

        do{
            temperatura = prompt("Ingrese la temperatura de almacenamiento. Entre -30 y 30")
            temperatura = parseInt(temperatura);
        }while(isNaN(temperatura) || temperatura < (-31) || temperatura > 31 );
        
        respuesta = prompt("Desea seguir ingresando datos? S/N");
        respuesta = respuesta.toUpperCase();

        if(temperatura %2 == 0){
            temperaturaPares++;
        }
    }while(respuesta == "S");

    if(bandera == 0){
        pesoMax = peso;
        marcaMax = marca;
        bandera = 1; 
    }else if(peso > pesoMax){
            marcaMax = marca;
        }
   

    document.write("a) Las temperaturas pares son: " + temperaturaPares + "<br>");
    document.write("b) La marca es del producto mas pesado es: " + marcaMax + " y su peso maximo es: " + pesoMax +"<br>");    
    //document.write("<br> El peso es: " + peso);
    //document.write("<br> La temperatura es: " + temperatura);
}
