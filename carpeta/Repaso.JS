// Primer punto

// Crear variable
var metros;
var kilometros;

// Solicitar valor al usuario
metros = prompt("Por favor ingrese un valor en metros");

// Operacion 
kilometros = metros /  1000;
// mostrar mensaje
console.log("La equivalencia es de " + metros + "m en km es " + kilometros + "Km");

// Segundo punto
var distancia;
var litrosGastados;
distancia = prompt("Por favor ingrese la distancia del viaje");
litrosGastados = distancia*290/100;console.log("La distancia del viaje es " + distancia + " km " + " y los litros gastados son " + litrosGastados + " L");
console.log("El resultado en kilolitros es " +litrosGastados/1000 + " kl ");