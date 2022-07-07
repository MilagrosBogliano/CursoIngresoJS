/* Bogliano Milagros Vanesa, TP2.
2.Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let resultado;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = (largo + ancho)* 2;
    resultado = perimetro * 3;

    alert("Se deben comprar " + resultado + " metros de alambre");
}
function Circulo () 
{
	let radio;
    let resultado;
    let mensaje;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    resultado = (2 * 3.1415 * radio) * 3;

    mensaje = "Se deben comprar " + resultado.toFixed(2) + "metros  de alambre";
    alert(mensaje);

}
function Materiales () 
{
	let largo;
    let ancho;
    let perimetro;
    let cemento;
    let cal;
    let mensaje;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    
    perimetro = largo * ancho;
    cal = perimetro * 3;
    cemento = perimetro * 2;

    mensaje = "Para el contrapiso se deberian comprar " + cemento + " de cemento y " + cal + " de cal."
     
    alert(mensaje);
}