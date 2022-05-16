//Taller ciclos
 
//Primer Punto
var NumRepeticiones = 1;
 
while(NumRepeticiones < 8){
    console.log("lleva " + NumRepeticiones + " repeticiones");
    NumRepeticiones += 1;
}

//Segundo Punto
var Multiplos3 = 0;
 
while(Multiplos3 <= 30){
    console.log("Multiplo de 3 = " + Multiplos3);
    Multiplos3 += 3;
}

//Tercer Punto
var Multiplos2 = 0;
 
while(Multiplos2 <= 50){
    console.log("Multiplo de 2 = " + Multiplos2);
    Multiplos2 += 2;
}

//Cuarto Punto
var respuesta=prompt("ingrese un valor limite");
 var numerosimpar=1
while(numerosimpar <= respuesta ){
    console.log("numeros impares " + respuesta);
    numerosimpar +=2
}

//Quinto Punto
var Respuestica=prompt("Ingrese un numero impar para detenerse")
while(Respuestica %2==0){
    console.log("El numero " + Respuestica + " es par")
    Respuestica=prompt("Ingrese un numero impar para detenerse")
}
//Sexto Punto
var acumulador = 0; 
var valorAsumar;
var ciclo6 = 1;
var PersonasSalon=prompt("Ingrese la cantidad de personas que hay en su salon");
while(ciclo6 <= PersonasSalon ){

    valorAsumar=parseInt(prompt("Ingrese la edad de el estudiante"))
    acumulador=valorAsumar+acumulador
    ciclo6+=1;
}
console.log("El total del acumulador es " + acumulador)

//Septimo Punto
var palabra= "manito"
var intento=prompt("Ingrese la palabra")
var contador=0
while(intento != palabra){
    console.log("La palabra " + intento + " es incorrecta")
    intento=prompt("Siguiente intento")
    contador+= 1
}
console.log("Felicitaciones la palabra " + palabra + " es correcta y el numero de intentos es  " + contador)

//Octavo Punto

var NombreEstudiante=prompt("Ingrese el nombre del estudiante")
var numNotas=prompt("Ingrese el numero de notas ")
ciclo8 = 1
while(ciclo8<=numNotas){
    console.log("el numero de notas es " + numNotas)
     
}