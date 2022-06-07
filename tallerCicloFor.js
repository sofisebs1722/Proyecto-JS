// console.log("Taller Ciclo For")
// console.log("Primer punto")
// numerito1=prompt("Ingrese el primer numero")
// numerito2=prompt("Ingrese el segundo numero")
// if(numerito1>numerito2){
//     for(i=numerito2; i<=numerito1; i++){
//         console.log(i)
//     }
// }else{
//     for(i=numerito1; i<=numerito2; i++){
//         console.log(i)
//     }
// }
 
// console.log("segundo punto")
// num=prompt("Por favor digite un numero")
//     console.log("La tabla del ", num)  
//     for(i=0; i<=10; i++){
//         console.log(num, " x ", i, " = ", num*i)
//     }
 
   
// console.log("Tercer punto")
// numero=prompt("Por favor digite un numero")
// numero2=prompt("Ingrese el limite ")
// for(i=0; i<=numero2; i++){
//     console.log(numero, " x ", i, " = ", numero*i)
// }
 
// console.log("Cuarto punto")
// console.log("Por favor ingrese 10 numeros")
// arreglo=[]
// for(i=0; i<=9; i++){
//     numer=prompt("Numero ", i+1)
//     console.log("Numero", i+1)
//     arreglo[i]=numer
// }
// numMayor= arreglo[0]
// for(i=1;i<arreglo.length; i++){
//     if(arreglo[0] > numMayor){
//         numMayor= arreglo[i]
//     }
// }
// console.log("El numero mayor es ", numMayor)
 
console.log("Quinto punto")
arregloProductos=[]
nombreProducto=[]
arregloPrecio=[]
for(i=0; i<=4; i++){
    nombreProducto=prompt("Digite los productos comprados", 1)
    arregloProductos.push(nombreProducto);
}
console.log(arregloProductos)
for(i=0; i<=arregloProductos.length; i++){
    precioProducto=prompt("Ingrese el precio del producto comprado", arregloProductos[i]);
    arregloPrecio.push(precioProducto);
}
console.log("Sexto punto")
nombreProducto=prompt("Ingrese el nombre de un producto para conocer el precio")
for(i=0; i<arregloNombres.length; i++){
    if(arregloProductos[1]==nombreProducto){
    console.log("El precio de ", nombreProducto, "es $", arregloPrecio[i])
    }
}