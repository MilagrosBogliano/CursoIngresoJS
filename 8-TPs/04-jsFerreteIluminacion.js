/* Bogliano Milagros Vanesa, TP 4.
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{ //Declaro Variables
 	let cantidadLamparas;
    let suma;
    let descuento;
    let precioFinal;
    let marca;
    let precio;
    let precioIIBB;
    let  precioIIBBFinal;
    
    //Inicializo
    precio = 35;
    descuento = 0;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    suma = cantidadLamparas * precio;
    
    /*A*/
    if(cantidadLamparas >= 6){
        descuento =  50;
        precioFinal = suma - descuento;
    } /*B*/else if(cantidadLamparas == 5 && marca == "ArgentinaLuz"){
        descuento = 40;
    }else if(cantidadLamparas == 5 && marca != "ArgentinaLuz"){
        descuento = 30;
        
    }/*C*/else if(cantidadLamparas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
        descuento = 25;
    }else if(marca != "ArgentinaLuz" && marca != "FelipeLamparas"){
        descuento = 20;
    }/*D*/else if(cantidadLamparas == 3){
        if (marca == "ArgentinaLuz"){
            descuento = 15;
        }else if(marca == "FelipeLamparas"){
            descuento = 10;
        }else{
            descuento = 5;
        }
    }
    descuento = (suma * descuento)/100;
    precioFinal = suma - descuento;

    /*E*/ if(precioFinal > 120){
        precioIIBB= (precioFinal * 10)/100;
        precioIIBBFinal = precioFinal + precioIIBB;
        alert("IIBB Usted pago " + precioIIBBFinal);
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
    
}
/*let cantidadDeLamparas; 
    let marca; 
    let descuento = 0; 
    let precioConDescuento;
    let precioFinal; 
    let precioIIBB; 
    let precioIIBBFinal; 
    const PRECIOLAMPARA = 35; 
    
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value); 
    marca = document.getElementById("Marca").value; 

    switch (cantidadDeLamparas){
        case 3: 
            if ( marca == "ArgentinaLuz"){
                descuento = 15;
            }
            else if ( marca == "FelipeLamparas"){
                descuento = 10;
            }
            else {
                descuento = 5; 
            }
        break;
        case 4: 
            if ( marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                descuento = 25; 
            }
            else {
                descuento = 20;
            }
        case 5: 
            if ( marca == "ArgentinaLuz"){
                descuento = 40;
            }
            else {
                descuento = 30;
            }
        default: 
            descuento = 50; 
    }
    if (descuento != 0){
        precioConDescuento = PRECIOLAMPARA - (PRECIOLAMPARA * descuento / 100)
        precioFinal = precioConDescuento * cantidadDeLamparas; 
    }
    if (precioFinal > 120){
        precioIIBB = precioFinal * 10 / 100; 
        precioIIBBFinal = precioFinal + precioIIBB;
        alert ("IIBB usted pago " + precioIIBBFinal); 
    }
    document.getElementById("txtIdprecioDescuento").value = */
