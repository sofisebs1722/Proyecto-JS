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

console.log("punto 3")