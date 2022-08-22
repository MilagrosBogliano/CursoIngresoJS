function mostrar()
{
    let letra;
    let numero;
    let respuesta; 

    do{
        do{
            letra = prompt("Ingrese una letra");
            letra = letra.toLocaleUpperCase();
        }while(letra == letra);
        do{
            numero = prompt("Ingrese un numero");
            numero = parseInt(numero);
        }while(isNaN(numero) || (numero > -100 && numero >101))

        respuesta = prompt("Desea seguir ingresando datos? S/N");
    }while( respuesta == "S");
}
