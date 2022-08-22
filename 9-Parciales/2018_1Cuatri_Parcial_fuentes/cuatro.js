function mostrar()
{
    let numUno;
    let numDos;
    let suma;
    let resta;

    numUno = prompt("Ingrese un numero");

    numDos = prompt("Ingrese otro numero");

    if(numUno == numDos){
        alert(numUno + numDos);
    }else if(numUno > numDos){
        numUno = parseFloat(numUno);
        numDos = parseFloat(numDos);
        resta = numUno - numDos;
        alert(resta);
    }else{
        numUno = parseFloat(numUno);
        numDos = parseFloat(numDos);
        suma = numUno + numDos;
        alert(suma);
    }if(suma > 10){
        alert("La suma es: " + suma + " y supero el numero 10.");
    }
}
