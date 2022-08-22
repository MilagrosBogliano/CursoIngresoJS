function mostrar()
{
    let precio;
    let descuento;
    let precioConDescuento;
    let precioFinal;

    precio = prompt("Ingrese el precio");
    precio = parseFloat(precio);
    
    descuento = prompt("Ingrese el porcentaje del descuento");
    descuento = parseInt(descuento);

    precioConDescuento = (precio * descuento)/100;
    precioConDescuento = parseFloat(precioFinal);

    precioFinal = precio - descuento;
    precioFinal = parseFloat(precioFinal);
    document.getElementById("elPrecioFinal").value = precioFinal;

}
