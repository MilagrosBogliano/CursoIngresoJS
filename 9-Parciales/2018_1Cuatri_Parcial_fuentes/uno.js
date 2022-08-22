
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = prompt("Ingrese el ancho del rectangulo");
    ancho = parseFloat(ancho);
    largo = prompt("Ingrese el largo del rectangulo");
    largo = parseFloat(largo);

    perimetro = (ancho * 2 ) + (largo * 2);
    perimetro = parseFloat(perimetro);

    alert("El perimetro del resctangulo es de: " + perimetro);
}


