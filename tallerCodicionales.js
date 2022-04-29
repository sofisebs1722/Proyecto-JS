//punto 1

var saludar = "si";
 
if(saludar=="si"){
    console.log("Hola, soy un condicional simple");
}

//punto 2

var x=20;
 
if(x<=20){
    console.log("La condición es verdadera");
}

//punto 3

var edad =18; 
 
if(edad>=18){	
    console.log("Bienvenido, puede ingresar");
}else{ 
    (edad<=18)
    console.log("Lo siento, no tiene edad suficiente para entrar aquí");
}

//Punto 4 

var numero1 = 5;
var numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2>0) {
  console.log("numero2 es positivo");
}
if(numero1 !== 0 ) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1+1<numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
 
//punto 5

var numerito = 100;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito>50 && numerito>80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>80 && numerito<=100 ) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito) {
  console.log("numerito es igual a 100");
}else if (numerito>100){
    console.log("numerito es estrictamente mayor a 100");
  }

//punto 6 

numerito = 97

//punto 7

numerito = 62

//punto 8 

numerito = 106 

//punto 9

var dia_actual ="jueves";
if(dia_actual=="jueves") {
  console.log ("puede asistir al polideportivo");
}else{ 
  console.log ("No puede asistir al polideportivo");
}
//punto 10

var valor1 =3;
var valor2 =8;

if(valor2 == 0){
  console.log("no se puede dividir")
}else{
  console.log(valor1/valor2)
}

//punto 11

var dia="lunes"

if(dia=="lunes"){
  console.log ("el plato de hoy es, arroz con pollo")
}else if(dia=="martes"){
  console.log("el plato de hoy es, chuleta de cerdo/pollo")
}else if(dia=="miercoles"){
  console.log("el plato de hoy es, frijoles")
}else if(dia=="jueves"){
  console.log("el plato de hoy es, sancocho de pescado")
}else if(dia=="viernes"){
  console.log("el plato de hoy es, bandeja paisa")
}else if(dia=="sabado"){
  console.log("el plato de hoy es, ajiaco")
}else if(dia=="domingo"){
  console.log("el plato de hoy es, sancocho de gallina")
}

//punto 12 

var letra= "7";

if(letra== "a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){
  console.log ("la letra es una vocal")
}else if(letra=="0" || letra=="1" || letra=="2" || letra=="3" || letra=="4" ||letra=="5" || letra=="6" || letra== "7" || letra=="8" || letra=="9"){
  console.log( "la letra es un numero");
}else{ 
console.log("La letra es consonante")
}