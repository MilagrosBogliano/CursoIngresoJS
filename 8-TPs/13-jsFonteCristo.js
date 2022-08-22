/*Bogliano Milagros Vanesa, TP 13.
El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares () {
    //A  
    let numeroPositivo;
    let pares = 0;
    let i;

    numeroPositivo = document.getElementById("txtIdNumero").value;
    numeroPositivo = parseInt(numeroPositivo);

    for( i = numeroPositivo; i >= 0; i--){
        if(i % 2 == 0){
            pares++;
        }
    }
    document.write("<br> La cantidad de numeros es pares es de: " + pares);
}
function NumerosImpares(){
    //B
    let numeroPositivo;
    let impares = 0;
    let i;
    
    numeroPositivo = document.getElementById("txtIdNumero").value;
    numeroPositivo = parseInt(numeroPositivo);

    for( i = numeroPositivo; i >=0; i--){
        if(i % 2 !=0){
            impares++;
        }
    }
    document.write("<br> La cantidad de numeros impares es de: " + impares);
}
function NumerosDivisibles(){
    //C   
    let numeroPositivo;
    let divisibles = 0;
    let i;

    numeroPositivo = document.getElementById("txtIdNumero").value;
    numeroPositivo = parseInt(numeroPositivo);
    
    for( i = 1; i <= 100; i++){
        if(i % numeroPositivo == 0){
            divisibles++;
        }
    }
    document.write("<br> La cantidad de numeros divisibles, por el numero ingresado, desde el 1 hasta el 100 es: " + divisibles);
}
function VerificarPrimo(){
    //D
    let numeroPositivo;
    let primo = 0;
    let i;

    numeroPositivo = document.getElementById("txtIdNumero").value;
    numeroPositivo = parseInt(numeroPositivo);

    for(i = 0; i<= numeroPositivo; i++){
        if(numeroPositivo % i == 0){
            primo++; 
        }
    }
        if(primo == 2){
            document.write("<br> El " + numeroPositivo + " es un  numero primo");
        }else{
            document.write("<br> El " + numeroPositivo + " no es un numero primo");
        }
}
function NumerosPrimos(){
    //E
    let numeroPositivo;
    let primo;//se podria llamar divisores
    let cantidad = 0;
    let j;
    let i;

    numeroPositivo = document.getElementById("txtIdNumero").value;
    numeroPositivo = parseInt(numeroPositivo);

    for(i = 1; i <= numeroPositivo; i++){
        primo = 0;
        for(j = 1; j <= i; j++){
            if(i % j == 0){
                primo++; 
            }
        }
        if(primo == 2){
            cantidad++;
        }
    }
    
    document.write("<br> La cantidad de numero primo es: " + cantidad);
}