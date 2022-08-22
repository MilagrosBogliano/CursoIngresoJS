/* Bogliano Milagros Vanesa, Ejercicio 5. 
Al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/
function mostrar()
{
	let i;
	let numero;

	for(i = 0 ; i >= 0 ; i++){
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if(numero == 9){
			document.write("<br>" + "Break");
			//alert("Break");
			break;
		}
	}
}