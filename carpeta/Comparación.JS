x=5;
console.log(x>7); // false
console.log(x<7); // true
console.log(x=="5"); // true
console.log(x==="5"); // false
console.log(x>=1); // true
console.log(x!=10); // true

console.log(2 < 12); // true 
console.log(2 < "12") //true 	
console.log(2 < "John")	// false 
console.log(2 > "John") // false 
console.log(2 == "John") // false 
console.log("John" == "John") // true
console.log("john" == "John")	// false 	
console.log("2" < "12")	// false
console.log("2" > "12")	// true 
console.log("2" == "12") // false 

x=6
y=3
console.log(x < 10 && y == 3);
console.log(!(x == 6));

console.log("ejercicos")
x=12;   
y=7;

console.log(x<15 && y!=7) //False
console.log(y>8 && x<20) //False
console.log(x==12 && x<18) //True
console.log("lunes" == "Lunes" || y!=9) //True
console.log(!(x==10) && y>=6) //True
console.log(x>6 && y==12 && 2>3) //False
console.log((x*2)>22 && y<(2*4)) //True
console.log((x>10 || x<10) && !(y!=7 && y<21)); //True

var tocaEduFisica= "si";
var uniforme = "diario";
 
if(tocaEduFisica == "si"){
    uniforme = "edu. física";
}
 
console.log("Mañana debe vestir el uniforme de " + uniforme);

var hayGaseosa = "NO";
var bebida;
 
if(hayGaseosa == "si"){
    bebida = "gaseosa";
}else{
    bebida = "refresco de fruta"
}
 
console.log("la bebida que acompaña su pedido es " + bebida);

var diaSiguiente= "jueves";
var cuaderno;
 
if(diaSiguiente == "lunes" || diaSiguiente == "martes"){
    cuaderno="Análisis";
}else if(diaSiguiente == "miercoles"){
    cuaderno="Tecnología";
}else if(diaSiguiente == "jueves"){
    cuaderno="Desarrollo"
}else{
    cuaderno="Ninguno";
}
 
console.log("Para la clase de mañana con el profesor Andres debe guardar el cuaderno de " +cuaderno);



