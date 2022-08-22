/* Bogliano Milagros Vanesa, DIV X 
3)Del inventario de la Empresa debes ingresar una cantidad indeterminada de productos, validando los siguientes datos:

nombre de producto,

precio,

unidades,

tipo(producto o repuesto)

a)informar el precio total de la compra.

b)el nombre del producto más caro del tipo “repuesto”.

c)el nombre del producto con menos unidades.


*/

function mostrar() {
 
  let nombre;
  let precio;
  let unidades;
  let tipo;
  let respuesta;
  let nombreMax;
  let nombreMin;
  let acumuladorPrecioFinal = 0;
  let acumuladorPrecio = 0;
  let banderaPrecioMax = 0;
  let precioMax = 0;
  let banderaUnidadesMin = 0;
  let unidadesMin = 0;

  do{
    do{
      nombre = prompt("Ingrese el nombre del producto");
    }while(!isNaN(nombre));

    do{
      precio = prompt("Ingrese el precio");
      precio = parseFloat(precio);
    }while(isNaN(precio) && (precio  > 0));

    do{
      unidades = prompt("Ingrese la cantidad de productos.");
      unidades = parseInt(unidades);
    }while(isNaN(unidades) && (unidades > 0));

    do{
      tipo = prompt("Ingresar el tipo de producto: producto , repuesto ");
      tipo = tipo.toLowerCase();
    }while(tipo != "producto" && tipo != "repuesto");


    if(tipo == "repuesto"){
      if(banderaPrecioMax == 0) {
        precioMax = precio;
        nombreMax = nombre;
        banderaPrecioMax = 1;
      }else if(precio > precioMax){
        precioMax = precio;
        nombreMax = nombre;
      }
    }

    if(banderaUnidadesMin == 0){
      unidadesMin = unidades;
      nombreMin = nombre;
      banderaUnidadesMin = 1;
    }else if(unidades < unidadesMin){
      unidadesMin = unidades;
      nombreMin = nombre;
    }


    acumuladorPrecio = acumuladorPrecio + precio;

    respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
  }while(respuesta == 'S');
  
  acumuladorPrecioFinal =  acumuladorPrecio * unidades;

  document.write("a) El precio total de la compra es: " + acumuladorPrecioFinal + "<br>");
  document.write("b) El nombre del producto más caro del tipo “repuesto”" + nombreMax + "<br>");
  document.write("c) el nombre del producto con menos unidades es: " + nombreMin + "<br>");
}






/* Bogliano Milagros Vanesa, DIV X     RECUPERATORIO
Ejercicio Nro 1. 

1)De 5 personas que ingresan al gimnasio se deben tomar y validar los siguientes datos:

nombre,

altura,

peso,

sexo

a)informar la cantidad de personas de sexo femenino.

b)la altura promedio en total.

c)el nombre del hombre con menos peso(si lo hay).

Pedir datos por prompt y mostrar por document.write

 let i;
  let nombre;
  let altura;
  let peso;
  let sexo;
  let nombreMin;
  let contadorFemenino = 0;
  let acumuladorAltura = 0;
  let promedioAltura = 0;
  let banderaHombreMin = 0;
  let pesoMin = 0;

  for(i = 0; i < 5; i++) {
    do{
      nombre = prompt("Ingrese su nombre");
    }while(!isNaN(nombre));
    
    do{
      altura = prompt("Ingrese su altura.");
      altura = parseFloat(altura);
    }while(isNaN(altura) && (altura > 0));

    do{
      peso = prompt("Ingrese su peso.");
      peso = parseFloat(peso);
    }while(isNaN(peso) && (peso > 0));

    do{
      sexo = prompt("Ingresar su sexo. F (Femenino) /M (Masculino)");
      sexo = sexo.toUpperCase();
    }while(sexo != 'M' && sexo != 'F');

    if(sexo == 'F'){
      contadorFemenino++;
    }
    
    if(sexo == 'M'){
      if(banderaHombreMin == 0){
        pesoMin = peso;
        nombreMin = nombre;
        banderaHombreMin = 1;
      }else if(peso < pesoMin){
        pesoMin = peso;
        nombreMin = nombre;
      }
    }
    acumuladorAltura = acumuladorAltura + altura;
  }

  if(i > 0){
    promedioAltura = acumuladorAltura / i;
  } else{
    promedioAltura = "No se pudo calcula el promedio";
  }

  document.write("a) La cantidad de personas de sexo femenino es:" + contadorFemenino + "<br>");
  document.write("b) la altura promedio en total es de: " + promedioAltura + "<br>");
  document.write("c) el nombre del hombre con menos peso es: " + nombreMin + "<br>");

*/


/*  Bogliano Milagros Vanesa, DIV X    
Ejercicio Nro. 2:

2)Nos ingresan una cantidad indeterminada de viajes en micro, validando los datos ingresados:

nombre del chofer,

destino (“Cordoba”, “Mendoza” o “Entre Rios”),

temporada(“alta”,”baja”,“media”),

cantidad de pasajeros

informar:

a)el lugar destino más elegido.

b)el nombre del chofer que lleva menos pasajeros.

c)el promedio de personas que viajan en temporada alta.

  let nombre;
  let destino;
  let temporada;
  let cantidad;
  let respuesta;
  let destinoMasElegido;
  let nombreMin;
  let contadorCordoba = 0;
  let contadorMendoza = 0;
  let contadorEntreRios = 0;
  let banderaCantidadMin = 0;
  let cantidadMin = 0;
  let contadorTemporadaAlta = 0
  let acumuladorCantidad = 0;
  let promedioPersonas = 0;

  do{

    do{
      nombre = prompt("Ingrese el nombre del chofer");
    }while(!isNaN(nombre));

    do{
      destino = prompt("Ingrese el destino. cordoba, mendoza o entre rios");
      destino = destino.toLowerCase();
    }while(destino != "cordoba" && destino != "mendoza" && destino != "entre rios");

    do{
      temporada = prompt("Ingresar el temporada de temporada : alta , baja , media ");
      temporada = temporada.toLowerCase();
    }while(temporada != "alta" && temporada != "baja" && temporada != "media");

    do{
      cantidad = prompt("Ingrese el cantidad de pasajeros");
      cantidad = parseFloat(cantidad);
    }while(isNaN(cantidad) && (cantidad  > 0));

    switch(destino){
      case "cordoba":
        contadorCordoba++;
      break;
      case "entre rios":
        contadorEntreRios++;
      break;
      case "mendoza":
        contadorMendoza++;
      break;
    }

    if(banderaCantidadMin == 0){
      cantidadMin = cantidad;
      nombreMin = nombre;
      banderaCantidadMin = 1;
    }else if(cantidad < cantidadMin){
      cantidadMin = cantidad;
      nombreMin = nombre;
    }

    if(temporada == "alta"){
      contadorTemporadaAlta++;
      acumuladorCantidad = acumuladorCantidad + cantidad;
    }

    respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
  }while(respuesta == 'S');

  if(contadorCordoba > contadorEntreRios && contadorCordoba > contadorMendoza){
    destinoMasElegido = "Cordoba";
  }else if(contadorEntreRios > contadorCordoba && contadorEntreRios > contadorMendoza){
    destinoMasElegido = "Entre Rios";
  } else{
    destinoMasElegido = "Mendoza";
  }

  if(contadorTemporadaAlta > 0){
    promedioPersonas = acumuladorCantidad / contadorTemporadaAlta;
  }else {
    promedioPersonas = "No se pudo calcular el promedio";
  }

  document.write("a) El lugar destino más elegido es: " + destinoMasElegido + "<br>");
  document.write("b) El nombre del chofer que lleva menos pasajeros es: " + nombreMin + "<br>");
  document.write("c) El promedio de personas que viajan en temporada alta" + promedioPersonas + "<br>");

*/






/* REPASO
Ejercicio 2 del Examen

2)De 10 corredores de moto se deben tomar y validar los siguientes datos del Enduro del Verano
nombre, 
edad, 
tiempo(dato entero expresado en segundos),
sexo.
Informar:
a)El nombre del hombre con más tiempo(si lo hay).
b)El promedio de la edad de todos los participantes.
c)La cantidad de corredores de sexo femenino.
Pedir datos por prompt y mostrar por document.write
 let i;
  let nombre;
  let edad;
  let tiempo;
  let sexo;
  let nombreMax;
  let banderaTiempoMax = 0;
  let tiempoMax = 0;
  let acumuladorEdad = 0;
  let promedioEdad = 0;
  let contadorFemenino = 0;

  for(i = 0; i < 10; i++){
    do{
      nombre = prompt("Ingrese su nombre");
    }while(!isNaN(nombre));

    do{
      edad = prompt("Ingrese su edad entre 18 y 55.");
      edad = parseInt(edad);
    }while(isNaN(edad) || (edad < 18 || edad > 55));
    
    do{
      tiempo = prompt("Ingrese su tiempo.");
      tiempo = parseFloat(tiempo);
    }while(isNaN(tiempo) && (tiempo > 0));

    do{
      sexo = prompt("Ingresar su sexo. F (Femenino) /M (Masculino)");
      sexo = sexo.toUpperCase();
    }while(sexo != 'M' && sexo != 'F');

    if(sexo == 'M'){
      if(banderaTiempoMax == 0) {
        tiempoMax = tiempo;
        nombreMax = nombre;
        banderaTiempoMax = 1;
      }else if(tiempo > tiempoMax){
        tiempoMax = tiempo;
        nombreMax = nombre;
      }
    }else{
      contadorFemenino++;
    }
  
    acumuladorEdad = acumuladorEdad + edad;
  }

  if(i > 0){
    promedioEdad = acumuladorEdad / i;
  }else{
    promedioEdad = "No se pudo calcular el promedio";
  }

  document.write("a) El nombre del hombre con más tiempo es: " + nombreMax + "<br>");
  document.write("b) El promedio de la edad de todos los participantes es de: " + promedioEdad + "<br>");
  document.write("c) La cantidad de corredores de sexo femenino es de: " + contadorFemenino + "<br>");
*/


/* PARCIAL
1)De una Red Social se debe ingresar una cantidad indeterminada de interacciones diaria de usuarios, validando los siguientes datos:
nombre de usuario, 

edad, 

cantidad de likes, 

tipo(“INVITADO” o “VIP”)

Informar:

a)El nombre del usuario de tipo “VIP” más joven.

b)La cantidad total de likes del día.

c)Promedio total de likes de los usuarios del tipo “INVITADO”.

Pedir datos por prompt y mostrar por document.write

let nombre;
let edad;
let cantidad;
let tipo;
let bandera = 0;
  let nombreMin;
  let edadMin = 0;
  let acumuladorInvitados = 0;
  let contadorInvitado = 0;
  let acumuladorInvitados =0;
  let promedio = 0;
  let respuesta;


  do {

    nombre = prompt("Ingrese el nombre del usuario");

    do {
      edad = prompt("Ingrese su edad entre 10 y 100.");
      edad = parseInt(edad);
    } while (isNaN(edad) || (edad < 10 || edad > 100));

    do {
      cantidad = prompt("Ingrese la cantidad de likes.");
      cantidad = parseInt(cantidad);
    } while (isNaN(cantidad) && cantidad != 0);

    do {
      tipo = prompt("Ingresar el tipo INVITADO , VIP ");
      tipo = tipo.toUpperCase();
    } while (tipo != "INVITADO" && tipo != "VIP");

    if (tipo == "VIP") {
      if (bandera == 0) {
        edadMin = edad;
        nombreMin = nombre;
        bandera = 1;
      } else if (edad < edadMin) {
        edadMin = edad;
        nombreMin = nombre;
      }
    }

    if (tipo == "INVITADO") {
      contadorInvitado++;
      acumuladorInvitados= acumuladorInvitados + cantidad;// cambiar el nombe de la variable suma. Se esta pisando.  
    }

    acumuladorTotal = acumuladorTotal + cantidad;

    respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
  } while (respuesta == 'S');
  if(contadorInvitado >0){
    promedio = suma / contadorInvitado;
  }else{
    promedio="No se puede calcular";//0
  }
  

  document.write("a) El nombre del usuario de tipo “VIP” más joven es: " + nombreMin + "<br>");
  document.write("b) La cantidad total de likes del día es: " + acumuladorTotal + "<br>");
  document.write("c) Promedio total de likes de los usuarios del tipo “INVITADO” es: " + promedio + "<br>");*/

/* Bogliano Milagros Vanesa, DIV X.
2)De 10 corredores de moto se deben tomar y validar los siguientes datos del Enduro del Vera
nombre, 
edad, 
tiempo(dato entero expresado en segundos),
sexo.

Informar:

a)El nombre del hombre con mas tiempo(si lo hay).

b)El promedio de la edad de todos los participantes.

c)La cantidad de corredores de sexo femenino.

Pedir datos por prompt y mostrar por document.write
  let i;
  let nombre;
  let edad;
  let tiempo;
  let sexo;
  let bandera = 0;
  let tiempoMax = 0;
  let nombreMax;
  let acumuladorTotal = 0;
  let promedioEdad = 0;
  let contadorFemenino = 0;

  for (i = 0; i < 10; i++) {
    
    do{
      nombre = prompt("Ingrese su nombre");
    }while(!isNaN(nombre));
    
    do {
      edad = prompt("Ingrese su edad entre 0 y 100.");
      edad = parseInt(edad);
    } while (isNaN(edad) || (edad < 20 || edad > 50));

    do {
      tiempo = prompt("Ingrese su tiempo (dato entero expresado en segundos)");
      tiempo = parseFloat(tiempo);
    } while (isNaN(tiempo) && (tiempo > 0));

    do {
      sexo = prompt("Ingresar su sexo. F (Femenino) /M (Masculino)");
      sexo = sexo.toUpperCase();
    } while (sexo != 'M' && sexo != 'F');

    if (sexo == 'M') {
      if (bandera == 0) {
        tiempoMax = tiempo;
        nombreMax = nombre;
        bandera = 1;
      } else if (tiempo > tiempoMax) {
        tiempoMax = tiempo;
        nombreMax = nombre;
      }
    }else {
      contadorFemenino++;
    }

    acumuladorTotal = acumuladorTotal + edad;

  }
  if(i > 0){
    promedioEdad = acumuladorTotal / i;
  }else {
    promedioEdad = No se pudo calcular; 
  }
 

  document.write("a) El nombre del hombre con mas tiempo es: " + nombreMax + "<br>");
  document.write("b)El promedio de la edad de todos los participantes es:  " + promedioEdad + "<br>");
  document.write("c) La cantidad de corredores de sexo femenino es:  " + contadorFemenino + "<br>");
*/

/* Bogliano Milagros Vanesa, DIV X.

3)Nos ingresan una cantidad indeterminada de ventas realizadas por las distintas sucursales de una Mega Tienda Polirubro, validando los datos ingresados:

  nombre del cliente, 

  sucursal( “CABA”, “BS.AS.” o “INTERIOR”), 

  tipo(“GRANDE”,”MEDIANA”,“PEQUEÑA”),

  monto de venta en Pesos.

Informar:

a)El nombre del cliente al que se le vendió menos.

b)El promedio del monto de venta de las sucursales del tipo “PEQUEÑA”.

c)La sucursal con mas cantidad de ventas.

let nombre;
  let sucursal;
  let tipo;
  let monto;
  let banderaVentas = 0;
  let nombreMin;
  let montoMin = 0;
  let acumuladorTipoPequena = 0;
  let promedioSucursalPequena = 0;
  let contadorTipoPequena = 0;
  let contadorSucursalInterior = 0;
  let contadorSucursalBSAS = 0;
  let contadorSucursalCaba = 0;
  let sucursalMasVentas;

  do {

    do{
      nombre = prompt("Ingrese su nombre");
    }while(!isNaN(nombre));

    do{
      sucursal = prompt("Ingrese la sucursal. CABA, BS.AS o INTERIOR");
      sucursal = sucursal.toUpperCase();
    }while(sucursal != "CABA" && sucursal != "BS.AS" && sucursal != "INTERIOR");

    do{
      tipo = prompt("Ingresar el tipo de sucursal: GRANDE , MEDIANA , PEQUENA ");
      tipo = tipo.toUpperCase();
    }while(tipo != "GRANDE" && tipo != "MEDIANA" && tipo != "PEQUENA");

    do{
      monto = prompt("Ingrese el monto en pesos.");
      monto = parseFloat(monto);
    }while(isNaN(monto) && monto > 0);

    if(banderaVentas == 0) {
      montoMin = monto;
      nombreMin = nombre;
      banderaVentas = 1;
    } else if(monto < montoMin){
      montoMin = monto;
      nombreMin = nombre;
    }

    if(tipo == "PEQUENA"){
      contadorTipoPequena++;
      acumuladorTipoPequena = acumuladorTipoPequena + monto;
    }

    switch(sucursal){
      case "BS.AS":
        contadorSucursalBSAS++;
        break;
      case "CABA":
        contadorSucursalCaba++;
        break;
      case "INTERIOR":
        contadorSucursalInterior++;
        break;
    }

    respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
  }while(respuesta == 'S');

  if(contadorTipoPequena > 0){
    promedioSucursalPequena = acumuladorTipoPequena / contadorTipoPequena;
  }else {
    promedioSucursalPequena="No se puede calcular";
  }
  
  if (contadorSucursalBSAS > contadorSucursalCaba && contadorSucursalBSAS > contadorSucursalInterior) {
    sucursalMasVentas = "Sucursal BS.AS";
  } else if (contadorSucursalCaba > contadorSucursalBSAS && contadorSucursalCaba > contadorSucursalInterior) {
    sucursalMasVentas = "Sucursal CABA";
  } else {
    sucursalMasVentas = "Sucursal INTERIOR";
  }

  document.write("a) El nombre del cliente al que se le vendio menos es: " + nombreMin + "<br>");
  document.write("b) El promedio del monto de venta de las sucursales del tipo “PEQUEÑA” es: " + promedioSucursalPequena + "<br>");
  document.write("c) La sucursal con mas cantidad de ventas es: " + sucursalMasVentas + "<br>");
*/







/*
Librería Colorcito
Es necesario llevar un registro de la venta diaria de lápices, fibras y lapiceras.
Para eso, al momento de cada venta, se debe ingresa hasta que el usuario quiera:
 + Tipo VALIDAR (lápiz / fibra / lapicera)
 + Marca
 + Cantidad.

Sabiendo que el costo de cada producto es:
    lapiz c/u $50.
    lapicera c/u $70.
    fibra c/u 60$

y si compra:
    6 unidades o mas se aplica el 15% de descuento
    8 unidades o mas se aplica el 20% de descuento
    15 unidades o mas el 35% de descuento.

Se pide calcular e informar por document.write() :

 a) Cantidad y monto total de cada producto.
 b) Cuál es el producto con más unidades vendidas.
 c) Cuál fue la marca del producto que obtuvo la mayor facturación en una sola venta.
 d) Cuál fue el producto con mayor facturación total.
 e) Cuál fue el porcentaje de ventas de lapiceras.

 let tipo;
  let marca;
  let cantidad;
  let respuesta;
  let precioLapicera = 70;
  let precioLapiz = 50;
  let precioFibra = 60;
  let contadorLapicera =0;
  let contadorLapiz = 0;
  let contadorFibra = 0;
  let acumuladorLapicera =0;
  let acumuladorFibra = 0;
  let acumuladorLapiz =0;
  let acumuladorTotalLapiceras =0;
  let acumuladorTotalFibra =0;
  let acumuladorTotalLapiz =0;
  let banderaProductoMasVendido =0;
  let cantidadMax = 0;
  let tipoMax =0;
  let productoConMayorFacturacion=0;

  do{
    do{
      tipo = prompt("Ingresar el tipo de producto: lapicera , lapiz , fibra ");
      tipo = tipo.toLowerCase();
    }while(tipo != "lapicera" && tipo != "lapiz" && tipo != "fibra");

    do{
      marca = prompt("Ingrese la marca del producto");
    }while(!isNaN(marca));

    do{
      cantidad = prompt("Ingrese la cantidad de productos.");
      cantidad = parseInt(cantidad);
    }while(isNaN(cantidad) && cantidad  > 0);

    switch(tipo){
      case "lapicera":
        contadorLapicera++;
        acumuladorLapicera = acumuladorLapicera + cantidad;
      break;
      case "fibra":
        contadorFibra++;
        acumuladorFibra = acumuladorFibra + cantidad;
      break;
      case "lapiz":
        contadorLapiz++;
        acumuladorLapiz = acumuladorLapiz + cantidad;
      break;
    }

    if(banderaProductoMasVendido == 0) {
      cantidadMax = cantidad;
      tipoMax = tipo;
      banderaProductoMasVendido = 1;
    }else if(cantidad > cantidadMax){
      cantidadMax = cantidad;
      tipoMax = tipo;
    }
  
    respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
  }while(respuesta == 'S');

  acumuladorTotalLapiceras = acumuladorLapicera * precioLapicera;
  acumuladorTotalFibra = acumuladorFibra * precioFibra;
  acumuladorTotalLapiz = acumuladorLapiz * precioLapiz;

  if(acumuladorTotalLapiceras > acumuladorTotalFibra && acumuladorTotalLapiceras > acumuladorTotalLapiz){
    productoConMayorFacturacion = "Lapicera";
  }else if(acumuladorTotalFibra > acumuladorTotalLapiceras && acumuladorTotalFibra > acumuladorTotalLapiz){
    productoConMayorFacturacion = "Fibra";
  } else{
    productoConMayorFacturacion = "Lapiz";
  }

  document.write("a) La cantidad de lapiceras que se compro es de:  " + acumuladorLapicera + " y el precio total es de : " + acumuladorTotalLapiceras + "<br>");
  document.write("a) La cantidad de fibras que se compro es de:  " + acumuladorFibra + " y el precio total es de : " + acumuladorTotalFibra + "<br>");
  document.write("a) La cantidad de lapices que se compro es de:  " + acumuladorLapiz + " y el precio total es de : " + acumuladorTotalLapiz + "<br>");
  document.write("b) El producto con más unidades vendidas es: " + tipoMax + "<br>");
  document.write("d) El producto con mayor facturación total fue: " + productoConMayorFacturacion + "<br>");

  if(cantidad >= 6){
    descuento = (*15)/100;
  } else if(cantidad >= 8){
    descuento = (*20)/100;
  }else if(cantidad >= 15){
    descuento = (*35)/100;
  }

*/



/**
Ejercicio 3
Parador Atalaya
Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, es necesario llevar un registro  de la venta diaria de cafés, medialunas y churros, esto durante las siguientes 12 horas.
Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente a retirar
Tipo (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:

Café $100.
Medialunas $60.
Churros $50.


Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

Informes:

a) Cuantas Medialunas se compraron durante toda la jornada.
b) Cuál fue el producto con más unidades vendidas.
c) Nombre del cliente, y tipo de producto con mayor cantidad de compras
d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
e) Informar cuál fue el producto menos vendido para poder sacarlo de la venta.


let nombre;
  let tipo;
  let cantidad;
  let respuesta;
  let banderaProductos = 0;
  let cantidadMax = 0;
  let nombreMax;
  let tipoMax;
  let acumuladorCafe = 0;
  let precioCafe = 100;
  let acumuladorTotalCafe =0;
  let precioMedialunas = 60;
  let acumuladorTotalMedialunas = 0;
  let acumuladorChurros = 0;
  let acumuladorTotalChurros = 0;
  let precioChurros = 50;
  let acumuladorTotal = 0;
  let impuestos =0;
  let precioConImpuesto = 0;
  let contadorMedialunas =0;
  let contadorCafe =0;
  let contadorChurros =0;
  let acumMedialunas =0;
  let productoMenosVendido;
  let descuento;
  let precioConDescuento = 0;
  


  do{

    do{
      nombre = prompt("Ingrese su nombre");
    }while(!isNaN(nombre));
    do{
      tipo = prompt("Ingresar el tipo de producto: cafe , medialunas , churros ");
      tipo = tipo.toLowerCase();
    }while(tipo != "cafe" && tipo != "medialunas" && tipo != "churros");

    do{
      cantidad = prompt("Ingrese la cantidad de productos.");
      cantidad = parseInt(cantidad);
    }while(isNaN(cantidad) || (cantidad > 1001 && cantidad != 0));

    if(banderaProductos == 0) {
      cantidadMax = cantidad;
      tipoMax = tipo;
      nombreMax = nombre;
      banderaProductos = 1;
    }else if(cantidad > cantidadMax){
      cantidadMax = cantidad;
      tipoMax = tipo;
      nombreMax = nombre;
    }
    
    switch(tipo){
      case "medialunas":
        contadorMedialunas++;
        acumMedialunas = acumMedialunas + cantidad
        acumuladorTotalMedialunas = acumMedialunas * precioMedialunas;
      break;
      case "cafe":
        contadorCafe++;
        acumuladorCafe = acumuladorCafe + cantidad;
        acumuladorTotalCafe = acumuladorCafe * precioCafe;
      break;
      case "churros":
        contadorChurros++;
        acumuladorChurros = acumuladorChurros + cantidad;
        acumuladorTotalChurros = acumuladorChurros * precioChurros;
      break;
    }

    acumuladorTotal = acumuladorTotalCafe + acumuladorTotalMedialunas + acumuladorTotalChurros;
  
    respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
  }while(respuesta == 'S');

  if(contadorMedialunas <= 0){
    acumMedialunas = "No se compraron medialunas";
  }

  document.write("a) La cantida de medialunas que se compraron durante toda la jornada es: " + acumMedialunas + "<br>");
  document.write("b) El producto con más unidades vendidas fue: " + tipoMax + "<br>");
  document.write("c)  El Nombre del cliente es: " + nombreMax + " y  el tipo de producto con mayor cantidad de compras es: " + tipoMax + "<br>");

  if(acumuladorTotal > 1300){
    impuestos = (acumuladorTotal * 20)/100;
    precioConImpuesto = acumuladorTotal + impuestos;
    document.write("d) El monto con impuestos por haber excedido el monto de $1300 es: " + precioConImpuesto + "<br>");
  }

  if(contadorMedialunas < contadorCafe && contadorMedialunas < contadorChurros){
    productoMenosVendido =  "Medialunas";
  }else if(contadorCafe < contadorMedialunas && contadorCafe < contadorChurros){
    productoMenosVendido =  "Cafe";
  } else if(contadorChurros < contadorMedialunas && contadorChurros < contadorCafe){
    productoMenosVendido =  "Churros";
  } else{
    productoMenosVendido = "No se pudo calcular el producto con menos cantidad";
  }
  document.write("e) El producto menos vendido fue: " + productoMenosVendido + "<br>");

  switch (tipo) {
    case "medialunas":
    case "churros":
      if(cantidad == 24){
        descuento = (acumuladorTotal * 30)/100;
        precioConDescuento = acumuladorTotal - descuento;
        document.write("El precio final es: " + precioConDescuento);
      }else if(cantidad == 12){
        descuento = (acumuladorTotal * 20)/100;
        precioConDescuento = acumuladorTotal - descuento;
        document.write("El precio final es: " + precioConDescuento);
      }else if(cantidad == 10){
        descuento = (acumuladorTotal * 10)/100;
        precioConDescuento = acumuladorTotal - descuento;
        document.write("El precio final es: " + precioConDescuento);
      }
    break;
    default:
      document.write("El precio final es: " + acumuladorTotal);
    break;
  }
  if(cantidad == 5 && (tipo == "medialunas" || tipo =="churros")){
    if(tipo == "cafe" && cantidad == 1){
      descuento = (acumuladorTotal * 5)/100;
      precioConDescuento = acumuladorTotal - descuento;
      document.write("El precio final es: " + precioConDescuento);
    }
  }
*/

/*
3)Nos ingresan una cantidad indeterminada de préstamos otorgados por las distintas sucursales de una Entidad Financiera, validando los datos ingresados:

nombre del titular, sucursal( “CABA”, “BS.AS.” o “INTERIOR”), tipo(“grande”,”mediana”,“chica”), monto del prestamo en Pesos.

informar:

a)el nombre del titular al que se le prestó el menor monto de préstamo.

b)el promedio del monto prestado por las sucursales del tipo chica.

c)la sucursal con mas cantidad de préstamos


  let nombre;
  let sucursal;
  let tipo;
  let monto;
  let bandera = 0;
  let nombreMin;
  let montoMin = 0;
  let suma = 0;
  let promedio = 0;
  let contadorTipoChica = 0;
  let contadorSucursalInterior = 0;
  let contadorSucursalBSAS = 0;
  let contadorSucursalCaba = 0;

  do {

    nombre = prompt("Ingrese el nombre del titular.");

    do {
      sucursal = prompt("Ingrese la sucursal. CABA, BS.AS o INTERIOR");
      sucursal = sucursal.toUpperCase();
    } while (sucursal != "CABA" && sucursal != "BS.AS" && sucursal != "INTERIOR");

    do {
      tipo = prompt("Ingresar el tipo de sucursal: GRANDE , MEDIANA , CHICA ");
      tipo = tipo.toUpperCase();
    } while (tipo != "GRANDE" && tipo != "MEDIANA" && tipo != "CHICA");

    do {
      monto = prompt("Ingrese el monto en pesos.");
      monto = parseFloat(monto);
    } while (isNaN(monto) && monto != 0);

    if (bandera == 0) {
      montoMin = monto;
      nombreMin = nombre;
      bandera = 1;
    } else if (monto < montoMin) {
      montoMin = monto;
      nombreMin = nombre;
    }

    if (tipo == "CHICA") {
      contadorTipoChica++;
      suma = suma + monto;
      promedio = suma / contadorTipoChica;
    }

    switch (sucursal) {
      case "BS.AS":
        contadorSucursalBSAS++;
        break;
      case "CABA":
        contadorSucursalCaba++;
        break;
      case "INTERIOR":
        contadorSucursalInterior++;
        break;
    }

    respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
  } while (respuesta == 'S');

  if (contadorSucursalBSAS > contadorSucursalCaba && contadorSucursalBSAS > contadorSucursalInterior) {
    document.write("c) la sucursal con mas cantidad de préstamos es la de BS.AS<br>");
  } else if (contadorSucursalCaba > contadorSucursalBSAS && contadorSucursalCaba > contadorSucursalInterior) {
    document.write("c) la sucursal con mas cantidad de préstamos es la de CABA<br>");
  } else {
    document.write("c) la sucursal con mas cantidad de préstamos es la del interior<br>");
  }

  document.write("a) el nombre del titular al que se le prestó el menor monto de préstamo es: " + nombreMin + "<br>");
  document.write("b) el promedio del monto prestado por las sucursales del tipo chica es: " + promedio + "<br>");

 */
/*3)Nos ingresan una cantidad indeterminada de estadías de vacaciones, validando los datos ingresados:

nombre del pasajero titular,destino ( “Brasil”, “Caribe” o “Europa”), temporada(“alta”,”baja”,“media”), cantidad de pasajeros que viajan.

informar:

a)el lugar destino elegido.

b)el nombre del pasajero titular que lleva menos pasajeros.

c)el promedio de personas, que viajan en temporada alta.

let nombre;
  let destino;
  let temporada;
  let cantidad;
  let contadorBrasil = 0;
  let contadorCaribe = 0;
  let contadorEuropa = 0;
  let bandera = 0;
  let nombreMin = 0;
  let cantidadMin = 0;
  let contadorTemporadaAlta = 0;
  let suma = 0;
  let promedio = 0;
  let respuesta;
  do {

    nombre = prompt("Ingrese el nombre del titular.");

    do {
      destino = prompt("Ingrese el destino. BRASIL, CARIBE o EUROPA");
      destino = destino.toUpperCase();
    } while (destino != "BRASIL" && destino != "CARIBE" && destino != "EUROPA");

    do {
      temporada = prompt("Ingresar el temporada de temporada : ALTA , BAJA , MEDIA ");
      temporada = temporada.toUpperCase();
    } while (temporada != "ALTA" && temporada != "BAJA" && temporada != "MEDIA");

    do {
      cantidad = prompt("Ingrese la cantidad de pasajeros que viajan.");
      cantidad = parseInt(cantidad);
    } while (isNaN(cantidad) && cantidad != 0);

    switch (destino) {
      case "BRASIL":
        contadorBrasil++;
        break;
      case "CARIBE":
        contadorCaribe++;
        break;
      case "EUROPA":
        contadorEuropa++;
        break;
    }

    if (bandera == 0) {
      cantidadMin = cantidad;
      nombreMin = nombre;
      bandera = 1;
    } else if (cantidad < cantidadMin) {
      cantidadMin = cantidad;
      nombreMin = nombre;
    }

    if(temporada == "ALTA"){
      contadorTemporadaAlta++;
      suma = suma + cantidad;
      promedio = suma / contadorTemporadaAlta;
    }

    respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
  } while (respuesta == 'S');


  if (contadorBrasil > contadorCaribe && contadorBrasil > contadorEuropa) {
    document.write("a) El destino mas elegido es BRASI <br>");
  } else if (contadorCaribe > contadorBrasil && contadorCaribe > contadorEuropa) {
    document.write("a) El destino mas elegido es CARIBE <br>");
  } else {
    document.write("a) El destino mas elegido es  EUROPA <br>");
  }

  document.write("b) El nombre del titular que menos pasajeros lleva es:  " + nombreMin + "<br>");
  document.write("c) El promedio de personas, que viajan en temporada alta"+ promedio.toFixed(2) + "<br>");

*/









/*Ejercicio 1

El laboratorio Rossi necesita desarrollar un programa que permita obtener algunos datos estadísticos sobre las muestras de sangre que recibe el sector de "Derivaciones", se sabe que dicho sector recibe:
Tipo de muestra: "Sangre", "Orina", y "Otros" (validar)
Cantidad de tubos, (validar, no pueden ser menos de 3 tubos y no más de 7 tubos de muestras)
Procedencia de las muestras: Argerich, Duran, Fernández, Rapela (validar)
Precio de la prestación: (validar valor mínimo 10.000 y valor máximo 55.000)
Se necesita saber:
1) Del primer ingreso: tipo de muestra, precio y su procedencia
2) Del quinto ingreso de muestra (si existe) solo el precio y la cantidad de tubos
3) El promedio de dinero ganado en total
4) Del mayor precio de prestación: la cantidad de tubos, su procedencia y el tipo de muestras
5) Si el total de dinero recaudado supera los 500.000 pesos AFIP hace de las suyas y toca pagar ingresos brutos del 25% y si supera los 750.000 es 40%
let tipo;
  let cantidad;
  let procedencia;
  let precio;
  let respuesta;
  let contadorVueltas = 1;
  let precioTotal = 0;
  let promedio = 0;
  let bandera = 0;
  let precioMax = 0;
  let cantidadMax = 0;
  let procedenciaMax =0;
  let tipoMax = 0;
  let aumento = 0;
  let precioImpuesto  = 0;


  do {       

    do{
      tipo = prompt("Ingresar el tipo de muesta: SANGRE , ORINA , OTROS ");
      tipo = tipo.toUpperCase();
    }while (tipo != "SANGRE" && tipo != "ORINA" && tipo != "OTROS");
  
    do{
      cantidad = prompt("Ingrese la cantidad de tubos. (Entre 3 y 7 tubos de muestras)");
      cantidad = parseInt(cantidad);
    }while(isNaN(cantidad) || (cantidad < 2 && cantidad > 7));
  
    do{
      procedencia = prompt("Ingresar el procedencia de las muestras: ARGERICH , DURAN , FERNANDEZ O RAPELA");
      procedencia = procedencia.toUpperCase();
    }while (procedencia != "ARGERICH" && procedencia != "DURAN" && procedencia != "FERNANDEZ" && procedencia != "RAPELA");

    do{
        precio = prompt("Ingrese el precio de la prestación. El valor minimo es de $10.000 y el valor maximo es de $55.000");
        precio = parseFloat(precio);
    }while(isNaN(precio) || (precio < 9999 && precio >55001));	
    
    if(respuesta == 'S'){
      contadorVueltas++;
    }
    if(contadorVueltas == 1){
      document.write("a) El tipo de muestra es " + tipo + " el precio es: " + precio + " y la procedencia es: " + procedencia + "<br>");
    }
    if(contadorVueltas == 5){
      document.write("b) El precio es:  " + precio + " y la cantidad de tubos es: " + cantidad + "<br>");
    }
    precioTotal = precioTotal + precio;
    promedio = precioTotal /contadorVueltas;

    if(bandera == 0){
      precioMax = precio;
      cantidadMax = cantidad;
      procedenciaMax = procedencia;
      tipoMax = tipo;
      bandera = 1; 
    }else if(precio > precioMax){
      precioMax = precio;
      cantidadMax = cantidad;
      procedenciaMax = procedencia;
      tipoMax = tipo;
    }

    if(precioTotal >500000){
      aumento = (precioTotal * 25)/100;
      precioImpuesto  = precioTotal + aumento;
      document.write("e) El precio con los impuesto del 25% es de: " + precioImpuesto + "<br>");
    }else if(precioTotal >750000){
      aumento = (precioTotal * 40)/100;
      precioImpuesto  = precioTotal + aumento;
      document.write("e) El precio con los impuesto del 40% es de: " + precioImpuesto + "<br>");
    }
    

    respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
  }while(respuesta == 'S');

  document.write("c) El promedio del dinero ganado en total es: " + promedio  + "<br>");
  document.write("d) Del mayor precio de prestación,  la cantidad de tubos son: "+ cantidadMax +" su procedencia es: " + procedenciaMax + " y el tipo de muestra es:  " + tipoMax +"<br>");
 */



/* Parcial Primer cuatri 2022
1)De 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.

a)informar la cantidad de personas de sexo femenino.

b)la altura promedio en total

c)el nombre del hombre con menos peso(si lo hay)

Pedir datos por prompt y mostrar por document.write 

let i;
 let nombre;
 let altura;
 let peso;
 let sexo;
 let contadorFemenino = 0;
 let contadorAltura = 0;
 let suma = 0;
 let promedio = 0;
 let bandera = 0;
 let pesoMin = 0;
 let nombreUnidadesMin;

  for(i = 0; i < 5; i++){

    nombre = prompt("ingrese su nombre");
    
    do{
			altura = prompt("ingrese su altura");
			altura = parseFloat(altura);
		}while(isNaN(altura) && altura != 0);

    do{
      peso = prompt("Ingrese su peso.");
      peso = parseFloat(peso);
    }while(isNaN(peso) && (peso != 0));

    do{
      sexo = prompt("Ingresar su sexo. F (Femenino) /M (Masculino)/ NB(No Binario)");
      sexo = sexo.toUpperCase();
    }while(sexo != 'M' && sexo != 'F' && sexo !='NB');

    if(sexo == 'F'){
      contadorFemenino++;
    }
    if(altura !=0){
      contadorAltura++;
      suma = suma + altura;
      promedio = suma / contadorAltura;
    }
    if(bandera == 0){
      pesoMin = peso;
      nombreUnidadesMin = nombre;
      bandera = 1; 
      }else if(peso < pesoMin){
        pesoMin = peso;
        nombreUnidadesMin = nombre;
      }
  }

  document.write("a) La cantidad de personas con sexo femenino son: " + contadorFemenino + "<br>");
  document.write("b) La altura promedio en total es: " + promedio + "<br>");
  document.write("c) El nombre del hombre con menos peso es: " + nombreUnidadesMin + "<br>");
 */


/* 
2)De una compra debes ingresar una cantidad indeterminada de productos, validando los siguientes datos:

nombre de producto, precio, unidades, tipo(minorista o mayorista)

a)informar el precio total de la compra.

b)el nombre del producto más caro de tipo minorista

c)el nombre del producto con menos unidades 

 let nombre;
  let precio;
  let unidades;
  let tipo;
  let precioFinal = 0;
  let suma;
  let bandera = 0;
  let precioMax = 0;
  let unidadesMin = 0;
  let nombreUnidadesMin = 0;
  let nombreMax = 0;
  let banderaDos = 0;
  do {   

    nombre = prompt("ingrese el nombre del producto");

    do{
      precio = prompt("Ingrese el precio");
      precio = parseFloat(precio);
    }while(isNaN(precio) && precio !=0);


    do{
      unidades = prompt("Ingrese la unidades de productos.");
      unidades = parseInt(unidades);
    }while(isNaN(unidades) && unidades !=0);
    

    do{
      tipo = prompt("Ingresar el tipo de producto: MINORISTA , MAYORISTA. ");
      tipo = tipo.toUpperCase();
    }while (tipo != "MINORISTA" && tipo != "MAYORISTA");
    
    
    suma = precio * unidades;
    precioFinal = precioFinal + suma;

    if(tipo == "MINORISTA"){
      if(bandera == 0){
        precioMax = precio;
        nombreMax = nombre;
        bandera = 1; 
        }else if(precio > precioMax){
          precioMax = precio;
          nombreMax = nombre;
        }
    }

    if(banderaDos == 0){
      unidadesMin = unidades;
      nombreUnidadesMin = nombre;
      banderaDos = 1; 
      }else if(unidades < unidadesMin){
        unidadesMin = unidades;
        nombreUnidadesMin = nombre;
      }

    respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
    }while(respuesta == 'S');

    
    document.write("a) El precio total de la compra es: " + precioFinal + "<br>");
    document.write("b) El nombre del producto más caro de tipo minorista es: " + nombreMax + "<br>");
    document.write("c) El nombre del producto con menos unidades es: " + nombreUnidadesMin + "<br>");
  */

/*
3)Nos ingresan una cantidad indeterminada de estadías de vacaciones, validando los datos ingresados:

nombre del pasajero titular,destino ( “Brasil”, “Caribe” o “Europa”), temporada(“alta”,”baja”,“media”), cantidad de pasajeros que viajan.

informar:

a)el lugar destino elegido.

b)el nombre del pasajero titular que lleva menos pasajeros.

c)el promedio de personas, que viajan en temporada alta.
let nombre;
  let destino;
  let temporada;
  let cantidad;
  let cantidadMin = 0;
  let nombreMin;
  let bandera = 0;
  let contadorTemporada = 0;
  let promedio = 0;
  let suma = 0;
  let contadorBrasil =0;
  let contadorCaribe = 0;
  let contadorEuropa = 0;


  do {       
    
    nombre = prompt("ingrese el nombre del titular");

    do{
      destino = prompt("Ingresar el destino: BRASIL , CARIBE , EUROPA ");
      destino = destino.toUpperCase();
    }while (destino != "BRASIL" && destino != "CARIBE" && destino != "EUROPA");

    do{
      temporada = prompt("Ingresar el temporada de producto: ALTA , BAJA , MEDIA ");
      temporada = temporada.toUpperCase();
    }while (temporada != "ALTA" && temporada != "BAJA" && temporada != "MEDIA");

    do{
      cantidad = prompt("Ingrese la cantidad de pasajeros.");
      cantidad = parseInt(cantidad);
    }while(isNaN(cantidad) && cantidad !=0);


    switch (destino) {
      case "BRASIL":
        contadorBrasil++;
      break;
      case "CARIBE":
        contadorCaribe++;
      break;
      case "EUROPA":
        contadorEuropa++;
      break;
    }
    if(bandera == 0){
      cantidadMin = cantidad;
      nombreMin = nombre;
      bandera = 1; 
      }else if(cantidad < cantidadMin){
        cantidadMin = cantidad;
        nombreMin = nombre;
      }
      if(temporada=="ALTA"){
        contadorTemporada++;
        suma = suma + cantidad;
        promedio = suma / contadorTemporada;
      }

    respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
  }while(respuesta == 'S');

  if( contadorBrasil > contadorCaribe && contadorBrasil > contadorEuropa){
    document.write("a) el destino mas elejido es BRASIL <br>"); 
  } else if(contadorCaribe > contadorBrasil && contadorCaribe > contadorEuropa){
    document.write("a) el destino mas elejido es CARIBE <br>"); 
  }else {
    document.write("a) el destino mas elejido es EUROPA <br>"); 
  }

    document.write("b) el nombre del pasajero titular que lleva menos pasajeros es: " + nombreMin + "<br>");
    document.write("c) el promedio de personas, que viajan en temporada alta es: "+ promedio.toFixed(2) + "<br>"); 
*/




/* Ejercicio 3

3)Nos ingresan una cantidad indeterminada de préstamos otorgados por las distintas sucursales de una Entidad Financiera, validando los datos ingresados:

nombre del titular, sucursal( “CABA”, “BS.AS.” o “INTERIOR”), tipo(“grande”,”mediana”,“chica”), monto del prestamo en Pesos.

informar:

a)el nombre del titular al que se le prestó el menor monto de préstamo.

b)el promedio del monto prestado por las sucursales del tipo chica.

c)la sucursal con mas cantidad de préstamos. 
let nombre;
  let sucursal;
  let tipo;
  let monto;
  let bandera = 0;
  let montoMin = 0;
  let nombreMin;
  let contadorSucursalChica = 0;
  let suma = 0;
  let promedio = 0;
  let contadorInterior = 0;
  let contadorBsAs = 0;
  let contadorCaba = 0;


  do {       
    nombre = prompt("ingrese el nombre del titular");

    do{
      sucursal = prompt("Ingresar la sucursal: CABA , BS.AS , INTERIOR ");
      sucursal = sucursal.toUpperCase();
    }while (sucursal != "CABA" && sucursal != "BS.AS" && sucursal != "INTERIOR");

    do{
      tipo = prompt("Ingresar el tipo de sucursal: GRANDE , MEDIANA , CHICA ");
      tipo = tipo.toUpperCase();
    }while (tipo != "GRANDE" && tipo != "MEDIANA" && tipo != "CHICA");

    do{
      monto = prompt("Ingrese el monto en pesos.");
      monto = parseFloat(monto);
    }while(isNaN(monto) && monto != 0);

    if(bandera == 0){
      montoMin = monto;
      nombreMin = nombre;
      bandera = 1; 
    }else if(monto < montoMin){
        montoMin = monto;
        nombreMin = nombre;
      }

    if(tipo =="CHICA"){
      contadorSucursalChica++;
      suma = suma + monto;
      promedio = suma / contadorSucursalChica;
    }
    switch (sucursal) {
      case "CABA":
        contadorCaba++;
      break;
      case "BS.AS":
        contadorBsAs++;
      break;
      case "INTERIOR":
        contadorInterior++;
      break;
    }

    respuesta = prompt("Desea seguir ingresando datos? S/N");
    respuesta = respuesta.toUpperCase();
  }while(respuesta == 'S');

  if( contadorCaba > contadorBsAs && contadorCaba > contadorInterior){
    document.write("c) la sucursal con mas cantidad de préstamos es CABA <br>"); 
  } else if(contadorBsAs > contadorCaba && contadorBsAs > contadorInterior){
    document.write("c) la sucursal con mas cantidad de préstamos es BS.AS <br>"); 
  }else {
    document.write("c) la sucursal con mas cantidad de préstamos es  INTERIOR <br>"); 
  }

  document.write("a) el nombre del titular al que se le prestó el menor monto de préstamo es: " + nombreMin + "<br>");
  document.write("b) el promedio del monto prestado por las sucursales del tipo chica es: " + promedio + "<br>") ;
 */

/*let tipo;
  let cantidad;
  let precio;
  let descuento;
  let precioFinal =0;
  let suma;
  let cantidadMax = 0;
  let precioFinalDescuento = 0;
  let tipoMax = 0;
  let bandera = 0;
  let respuesta;


  do {       
    do{
      tipo = prompt("Ingresar el tipo de producto: ARENA , CEMENTO , CALL ");
      tipo = tipo.toUpperCase();
  }while (tipo != "ARENA" && tipo != "CEMENTO" && tipo != "CALL");

  do{
    cantidad = prompt("Ingrese la cantidad de bolsas.");
    cantidad = parseInt(cantidad);
  }while(isNaN(cantidad) && cantidad !=0);

  do{
    precio = prompt("Ingrese el precio por bolsa.");
    precio = parseFloat(precio);
  }while(isNaN(precio) && precio < 0);

  suma = precio * cantidad;
  precioFinal = precioFinal + suma;

  
         
  respuesta = prompt("Desea seguir ingresando datos? S/N");
  respuesta = respuesta.toUpperCase(); 
}while(respuesta == 'S');

  if(cantidad > 10){
    descuento = (precioFinal * 15)/100; 
    precioFinalDescuento = precioFinal - descuento;
    document.write("b) El precio con descuento es de: "+ precioFinalDescuento + "<br>");
  }else if(cantidad > 30){
    descuento = (precioFinal * 25)/100; 
    precioFinalDescuento = precioFinal - descuento;
    document.write("b) El precio con descuento es de: "+ precioFinalDescuento + "<br>");
  }


  document.write("a) La suma total sin descuento es: " + precioFinal + "<br>");
  document.write("c) El tipo con mas cantidad de bolsas es: " +  cantidadMax + "el tipo de producto maximo es: " + tipoMax +"<br>"); */