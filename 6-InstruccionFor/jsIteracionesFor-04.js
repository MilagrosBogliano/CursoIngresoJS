/* Bogliano Milagros Vanesa, Ejercicio 4. 
Al presionar el botón repetir hasta que utilizamos 'BREAK'. */
function mostrar()
{
   let i;
   let numero;

   numero = prompt("Ingrese un numero");
   numero = parseInt(numero);

    for( i = 0; i < numero ; i++){
        alert("Numeros: " + i);

        if(i == 5){
            document.write("<br>" + "Break");
            break;
        }
    }
}