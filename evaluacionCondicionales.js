// Sofia López y Sebastián Huertas.

//punto 1

var ValorVariable= "2";
 
if (ValorVariable !="5" ){
   console.log("La condición es verdadera")
}


//punto 2 

var valor= 6 ;
 
if (valor == 6 && valor <= 10){
   console.log("El valor es correcto")
}

//punto 3 

var numero = "2";
 
if (numero === "2" ){
   console.log('El número es igual que "2" en valor y tipo');
}else if(numero === "3" ){
    console.log('El número es igual a "3" en tipo y valor');
}else if(numero>5 && numero<=15){
    console.log("El número es mayor que 5 y menor igual que 15");
}else if(numero>15 ){
    console.log("El número es mayor que 15");
}

//Respuesta 3.A
numero="2"
//Respuesta 3.B
    numero="3"
//Respuesta 3.C
    numero=13
//Respuesta 3.D
    numero=69   

// punto 4
Num1= 5;
Num2= 6;



// punto 5
var pais= "alemania"; 
var capital;
if(pais=="alemania"){
    console.log ("su capital es berlin")
  }else if(pais=="Brasil"){
    console.log("Brasilia")
}else if(pais=="Canada"){
    console.log("Ottawa")
}else if(pais=="Colombia"){
    console.log("Bogota")
}else{
    console.log("La base de datos esta en construccion")
}
//punto 6

var  numLlantas=5;
var marcaLlantas= "goodyear";

if (numLlantas==5 && marcaLlantas=="michelin"){
console.log(numLlantas*75000)
}else if(numLlantas==5 && marcaLlantas=="goodyear"){
    console.log(numLlantas*82000)
}else if(numLlantas==5 && marcaLlantas=="pirelli"){
    console.log(numLlantas*86000)
}else if(numLlantas==5 && marcaLlantas=="Brig"){
    console.log(numLlantas*82000)
}else{
    console.log("por el momento no se poseen ese tipo de llantas")
}