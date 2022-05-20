// //Taller ciclos
// console.log("Taller ciclos")
// //Primer Punto
// console.log("Primer punto")
// var NumRepeticiones = 1;
 
// while(NumRepeticiones < 8){
//     console.log("lleva " + NumRepeticiones + " repeticiones");
//     NumRepeticiones += 1;
// }

// //Segundo Punto
// console.log("Segundo punto")
// var Multiplos3 = 0;
 
// while(Multiplos3 <= 30){
//     console.log("Multiplo de 3 = " + Multiplos3);
//     Multiplos3 += 3;
// }

// //Tercer Punto
// console.log("Tercer punto")
// var Multiplos2 = 0;
 
// while(Multiplos2 <= 50){
//     console.log("Multiplo de 2 = " + Multiplos2);
//     Multiplos2 += 2;
// }

// //Cuarto Punto
// console.log("Cuarto punto")
// var respuesta=prompt("ingrese un valor limite");
//  var numerosimpar=1
// while(numerosimpar <= respuesta ){
//     console.log("numeros impares " + respuesta);
//     numerosimpar +=2
// }

// //Quinto Punto
// console.log("Quinto punto")
// var Respuestica=prompt("Ingrese un numero impar para detenerse")
// while(Respuestica %2==0){
//     console.log("El numero " + Respuestica + " es par")
//     Respuestica=prompt("Ingrese un numero impar para detenerse")
// }
// //Sexto Punto
// console.log("Sexto punto")
// var acumulador = 0; 
// var valorAsumar;
// var ciclo6 = 1;
// var PersonasSalon=prompt("Ingrese la cantidad de personas que hay en su salon");
// while(ciclo6 <= PersonasSalon ){

//     valorAsumar=parseInt(prompt("Ingrese la edad de el estudiante"))
//     acumulador=valorAsumar+acumulador
//     ciclo6+=1;
// }
// console.log("El total del acumulador es " + acumulador)

// //Septimo Punto
// console.log("Septimo punto")
// var palabra= "manito"
// var intento=prompt("Ingrese la palabra")
// var contador=0
// while(intento != palabra){
//     console.log("La palabra " + intento + " es incorrecta")
//     intento=prompt("Siguiente intento")
//     contador+= 1
// }
// console.log("Felicitaciones la palabra " + palabra + " es correcta y el numero de intentos es  " + contador)

//Octavo Punto
console.log("Octavo punto")
var NombreEstudiante=prompt("Ingrese el nombre del estudiante")
var numNotas=prompt("Ingrese el numero de notas ")
var notas
var promedio
var contador=1
var totalNotas=0
while(contador<=numNotas){
    notas=parseFloat(prompt("Digite las notas del estudiante"))
    if(notas>5 || notas<1){
        console.log("La nota es incorrecta esta debe ser entre 1 y 5")
    }else{
        totalNotas=notas+totalNotas
        promedio=totalNotas/numNotas
         contador+=1
    }
}
    if(promedio>=3.5){
        console.log("El estudiante ", NombreEstudiante, " gano la materia y su nota final es ",promedio )
    }else{
        console.log("El estudiante ", NombreEstudiante, " perdio la materia y su nota final es ",promedio )
    }
 
 
//Noveno punto
console.log("Noveno punto")
var numEstudiante=prompt("Ingrese el numero de estudiantes")
var contadorEstudiantes=1
while(contadorEstudiantes<=numEstudiante){
    var nombreEstudiante=prompt("Ingrese el nombre del estudiante")
    var numNotas=prompt("Ingrese el numero de notas ")
    var totalNotas=0
    var notas
    var promedio
    var contador=1
    while(contador<=numNotas){
        notas=parseFloat(prompt("Digite las notas del estudiante"))
        if(notas>5 || notas<1){
            console.log("La nota es incorrecta esta debe ser entre 1 y 5")
        }else{
            totalNotas=notas+totalNotas
            promedio=totalNotas/numNotas
             contador+=1
        }
    }
        if(promedio>=3.5){
            console.log("El estudiante ", nombreEstudiante, " gano la materia y su nota final es ",promedio )
        }else{
            console.log("El estudiante ", nombreEstudiante, " perdio la materia y su nota final es ",promedio )
        }
    contadorEstudiantes+=1
}
 
