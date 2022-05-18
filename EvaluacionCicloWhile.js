console.log("Primer punto")
var repeticiones=prompt("Por favor ingrese el numero de las repeticiones")
var contador=0
while(contador<=repeticiones){
    
    if(contador%5==0){ //el condicional indica que si el numero digitado por el usuario es multiplo de 5 va a imprimir que si lo es 
     console.log("El ",contador," Si es multiplo de 5");
     }else{ //este condicional indica que si no es multiplo de 5 va a imprimir que no lo es 
         console.log("El ",contador," no es multiplo de 5")
     }
     contador++; //El contador nos ayuda para que la secuencia no sea infinita
}

console.log("Segundo punto")
var cajero=prompt("Digite cuantos articulos va a ingresar")
var precioA
var compra=1
var acumulador=0
while(compra<= cajero){
    precioA=parseInt(prompt("Ingrese el precio de cada articulo"))
    acumulador= precioA+acumulador
    compra+=1
}
console.log("El precio total a pagar es ", acumulador)


console.log("Tercer punto")
var precioA
var compra=1
var acumulador=0
var respuesta="si"
while(respuesta=="si"){
precioA=parseInt(prompt("Por favor ingrese el precio de cada uno"))
acumulador= precioA+acumulador
compra+=1
respuesta=prompt("Ingrese si quiere seguir con mas objetos")
}
console.log("El precio a pagar es ", acumulador)


console.log("Cuarto punto")
var precioA
var compra=1
var acumulador=0
var respuesta="si"
while(respuesta=="si"){
precioA=parseInt(prompt("Por favor ingrese el precio de cada uno"))
acumulador= precioA+acumulador
compra+=1
respuesta=prompt("Ingrese si quiere seguir con mas objetos")
}
if(cajero>=8||cajero<=14){
    acumulador=precioA+acumulador*0.9
    console.log("El total pagar es ", acumulador, " y su descuento es del 10%")
}else if(cajero>=15||cajero<=24){
    acumulador=precioA+acumulador*0.85
    console.log("El total pagar es ", acumulador, " y su descuento es del 15%")
}else if(cajero>=25){
    acumulador=precioA+acumulador*0.8
    console.log("El total pagar es ", acumulador, " y su descuento es del 20%")
}else if (cajero<8){
    console.log("El total a pagar es ", acumulador, " y no tiene ningun descuento")

}
    
    
    console.log("Quinto punto")
var numEstudiante=prompt("Ingrese el numero de estudiantes")
var contadorEstudiantes=1
while(contadorEstudiantes<=numEstudiante){
    var nombreEstudiante=prompt("Ingrese el nombre del estudiante")
    var numNotas=prompt("Ingrese el numero de notas ")
    var totalNotas=0
    var notas
    var promedio
    var contador=1
    var estudiantesAprobados=0
    var estudiantesReprobados=0
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
            estudiantesAprobados+=1
        }else{
            console.log("El estudiante ", nombreEstudiante, " perdio la materia y su nota final es ",promedio )
            estudiantesReprobados+=1
        }
    contadorEstudiantes+=1
}
    if(estudiantesReprobados>=estudiantesAprobados){
            console.log("debe abrirse el curso de verano")
    }else{
        console.log("La cantidad de estudiantes no es sufuciente para curso de verano")
 
    }
