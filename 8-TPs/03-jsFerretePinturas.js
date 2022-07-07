/* Bogliano Milagros Vanesa, TP3.
3. Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let farenheit;
    let formula;
	let mensaje;

    farenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    formula = (farenheit - 32) * 5/9;

    mensaje = farenheit + " farenheit son" + formula + " centigrados";

    alert(mensaje);
}

function CentigradosFahrenheit () 
{
	let centigrados;
    let formula;
    let mensaje

    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);
    formula =  ((9 * centigrados) /5) +32;

    mensaje = centigrados + " centigrados son " + formula + " farenheit";

    alert(mensaje);
}
