/*
Taller 2
Fecha: 08-03-2022
Realizado por: Sebastián huertas, Sofia Lopez
*/
//Punto 1
var LadoCuadrado=prompt ("ingrese el valor del lado del cuadrado: ");
console.log(LadoCuadrado*LadoCuadrado);
console.log("El lado del cuadrado es " + LadoCuadrado + " y el area del cuadrado es " +  LadoCuadrado**2);
var LadoCubo=prompt ("ingrse el valor de la arista del cubo: ");
console.log(LadoCubo**3);
console.log("la arista del cubo es " + LadoCubo + " y el volumen es " + LadoCubo**3);
//Punto 2
var BaseRectangulo=prompt ("Ingrese la longitud de la base: ");
var LadoRectangulo=prompt ("Ingrese el lado del rectangulo: ");
console.log(BaseRectangulo*LadoRectangulo);
console.log(LadoRectangulo**2 + BaseRectangulo**2);
//Punto 3
var DiametroCirculo=prompt ("Ingrese el diametro del circulo: ");
console.log(DiametroCirculo * Math.PI);
var VolumenEsfera=prompt ("Ingrese el diametro de la esfera: ");
console.log(4/3 * (VolumenEsfera/2)**3 * Math.PI);
//Punto 4
var base1=prompt ("Ingrese el valor de base1 ");
var base2=prompt ("Ingrese el valor de base2 ");
var h=prompt ("Ingrese el valor de h ");
console.log(1/2*(base1+base2)*h); //Califique formula
//Punto 5
var anchoPiscina=prompt("Ingrese el ancho de la piscina: ");
var largoPiscina=prompt("Ingrese el largo de la piscina: ");
var profundidad=prompt("Ingrese la profundidad de la piscina: ");
console.log(anchoPiscina*largoPiscina*profundidad);
//Punto 6
var AltoMuro=prompt ("Ingrese el alto del muro: ");
var AnchoMuro=prompt ("Ingrese el ancho del muro: ");
var cobroPintor=(AltoMuro * AnchoMuro * 22000); 
console.log("El total a pagar por el muro es " + cobroPintor);
//Punto 7
//A
var Centimetros=prompt("Ingrese la longitud en cm: ");
console.log(Centimetros/100000);
//B
var Decilitros=prompt("Ingrese el volumen en decilitros: ");
console.log(Decilitros/10);
//C
var MicroGramos=prompt("Ingrese la masa en microgramos: ");
console.log(MicroGramos/100000);
//D
var kilometros=prompt("Ingrese la longitud en km: ")
console.log(kilometros*1000000);