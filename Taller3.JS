//Punto 1
var litrosPiscina;
var tiempo;
var totalLitros;
litrosPiscina = prompt("Por favor ingrese la cantidad de litros que tiene la piscina ");
tiempo=1;
totalLitros = litrosPiscina * tiempo / 145;
console.log("La cantidad de horas que tarda en llenarse la piscina es de " + totalLitros + " horas");
//Punto 2
var metros;
var milimetros;
metros = prompt("Por favor ingrese la longitud en metros ");
milimetros = metros * 1000;
console.log("La equivalencia es de " + metros + "m en mm es " + milimetros + "mm");
// Punto 3
var decimetros
decimetros = milimetros / 100;
console.log("La equivalencia de " + milimetros + "mm en dm es " + decimetros + "dm");
// punto 4
var kilometros
kilometros = decimetros / 10000;
console.log("La equivalencia de " + decimetros + "dm en km es " + kilometros + "km");
// punto 5
var pesos;
var horas;
horas = prompt ("ingrese la duración de la llamada ");
pesos = horas * 60 * 120;
console.log("El costo de la llamda es " + pesos);
// punto 6
var horaClase;
var cobroClase;
var cobroAdicional;
var ValorClase;
cobroClase = 40000;
cobroAdicional = 25000;
horaClase = prompt("Ingrese cuantas horas duró la clase ");
ValorClase = 40000 + (25000*(horaClase-1));
console.log("El costo de la clase es " + ValorClase);