console.log("Hola");
saludo();

function saludo(){
    console.log("¿qué tal?");
}

//  llamado a la funcion
saludo();

function sumita(){
    var numerito1= 10;
    var numerito2= 12;
    console.log(numerito1+numerito2);

    return numerito1 + numerito2;
}
console.log(sumita());

//Funcion con parametros
function sumar(Num1, Num2){
    return Num1 + Num2;
}
console.log(sumar(3,8));
// Diseñe un algoritmo que retorne el doble de la suma entre 2 numeros
sumaNumeros= sumar(1,2)

function dobleNumero(Num1, Num2){
    return sumar(Num1, Num2) * 2
}
console.log("El doble de la suma es: ", dobleNumero(sumaNumeros));


var resultado = dobleNumero(5, 10); 
console.log("El doble de la suma de dos numeros es " + resultado);