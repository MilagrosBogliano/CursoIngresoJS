/* Bogliano Milagros Vanesa, TP1.
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let productoUno;
    let productoDos;
    let productoTres;
    let suma;
    let mensaje;

    productoUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    productoDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    productoTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = productoUno + productoDos + productoTres;

    mensaje = "La suma de los tres productos es de " + suma;
    alert(mensaje);
}
function Promedio () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let suma;
    let promedio;
    let mensaje;

    productoUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    productoDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    productoTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = productoUno + productoDos + productoTres;
    promedio = suma /3;

    mensaje = "El promedio de los tres productos es de " + promedio;
    alert(mensaje);
}
function PrecioFinal () 
{
    let productoUno;
    let productoDos;
    let productoTres;
    let suma;
    let precioFinal;
    let iva;
    let mensaje;

    productoUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    productoDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    productoTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = productoUno + productoDos + productoTres;
    iva = (suma * 21)/100;
    precioFinal= iva + suma;
    mensaje = "El orecio final con el IVA es de  " + precioFinal;
    alert(mensaje);
}