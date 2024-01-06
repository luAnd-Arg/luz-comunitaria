// 1- obtener el valor a pagar 
// 2- dividir en el total de las familias
// 3- a esos importes , obtener el incremento de 40%
// 4 - sumar esos montos y obtener el precio total
// 5 - restar el monto de los 40% y obtener el resultado de los que pagan normal
// 6 - al resto dividir en las personas que pagan normal
// 7 - sumar ese total 
// 8 - sumar el total a pagar.

function calcular() {
  if (document.getElementById("montoInput") === false) {
    document.getElementById("error").innerHTML = "Error , debes agregar un monto";
  } else {  
    monto_a_pagar = document.getElementById("montoInput").value;
    familias = 9;
    cada_uno = parseInt(monto_a_pagar / familias);
    cuarenta_x_ciento = 0.40;
    incremento = parseInt(cada_uno * cuarenta_x_ciento + cada_uno);
    familiasConIncremento = 3;
    familiasSinIncremento = 6;
    totalIncremento = incremento * familiasConIncremento;
    totalsinIncremento = monto_a_pagar - totalIncremento;
    normal = parseInt(totalsinIncremento / familiasSinIncremento);
    montoTotalaPagar = totalIncremento + totalsinIncremento;
  
    document.getElementById("aviso").innerHTML = "Esta pagina fue creada para dar correctamente los montos de los pagos que deben realizar al servicio de luz. Esta automatizada y no cuenta con errores... Ahora procede a realizar los calculos..";
    document.getElementById("listado_completo").innerHTML = "<h3>Listado de Montos</h3>";
    document.getElementById("montoNormal").innerHTML = "<h3> Normal cada uno " + "</h3><li>Veronica " + " $ " + normal + "</li><li>Micaela " + " $ " + normal + "</li><li>Franco S " + " $ " + normal + "</li><li>Agustin " + " $ " + normal + "</li><li>Julio " + " $ " + normal + "</li><li>Diego " + " $ " + normal + "</li>";
    document.getElementById("monto40").innerHTML = "<h3>Incremento 40%  cada uno " + "</h3><li>Moira $ " + incremento + " </li><li>Franco M $ " + incremento + " </li><li>Lucas $ " + incremento + " </li>";
    document.getElementById("total").innerHTML = "total a pagar $" + montoTotalaPagar;
    document.getElementById("mostrarBotones").innerHTML = "<h4>¿Quieres saber cómo proceso los cálculos? <button onclick='mostrarProceso()'>¡Presiona aquí!</button></h4>";
      
  }

}

function mostrarProceso() {
  
  // Mostrar el proceso en el elemento con id "mostrarProcesos"
  var procesoHTML =
    "<p>1. Dividir el monto total de " + monto_a_pagar + " entre " +
    familias +
    " familias: $" +
    cada_uno +
    " para cada una.</p>" +
    "<p>2. Agregar un 40% de incremento a cada familia: $" +
    incremento +
    ".</p>" +
    "<p>3. Multiplicar el total con incremento por las " +
    familiasConIncremento +
    " familias que pagan con incremento , el total es: $" +
    totalIncremento +
    ".</p>" +
    "<p>4. Restar el total con incremento al monto total para obtener el valor de los que pagan Normal  $" +
    totalsinIncremento +
    ".</p>" +
    "<p>5. Dividir ese valor entre las " +
    familiasSinIncremento +
    " familias restantes que pagan normal: $" +
    normal +
    " para cada una.</p>" +
    "<p>6. El monto total a pagar es la suma de los montos con y sin incremento: $" +
    montoTotalaPagar +
    ".</p>";

  document.getElementById("mostrarProcesos").innerHTML = procesoHTML;
}
