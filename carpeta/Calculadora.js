
function suma (num1, num2){
    var resultado = num1 + num2;
    var mensaje = "el resultado de sumar "+ num1 + " y " + num2 + " es " + resultado;
    return resultado; 
}
function resta (num1, num2){
    var resultado = num1 - num2;
    var mensaje = "el resultado de restar "+ num1 + " y " + num2 + " es " + resultado;
    return resultado; 
}
function división (num1, num2){
    var resultado = num1 / num2;
    var mensaje = "el resultado de dividir "+ num1 + " y " + num2 + " es " + resultado;
    return resultado; 
}
function multiplicación (num1, num2){
    var resultado = num1 * num2;
    var mensaje = "el resultado de multiplicar "+ num1 + " y " + num2 + " es " + resultado;
    return resultado; 
}
function potencia (num1, num2){
    var resultado = num1 ** num2;
    var mensaje = "el resultado de la potencia "+ num1 + " y " + num2 + " es " + resultado;
    return resultado; 
}
  

function main_calculadora(){
    var eleccion=prompt("Por favor ingrese el numero de la operación que desea realizar: \n 1.Suma \n 2.Resta \n 3.División \n 4.Multiplicación \n 5.Potencia \n 6.Doble de la suma \n 7.Mitad de un producto \n 8.Triple de la resta \n 9.Quita parte de una potencia \n 10.Cociente aumentado 5 \n 11.La potencia aumentada la base")
    
    var numero1 = parseFloat(prompt("por favor ingrese el primer valor:"));
    var numero2 = parseFloat(prompt("por favor ingrese el segundo valor:"));

    if (eleccion=="1"){
        console.log(suma(numero1, numero2));
    }else if(eleccion == "2"){
        console.log(resta(numero1, numero2));
    }else if(eleccion == "3"){
        console.log(división(numero1, numero2));
    }else if(eleccion == "4"){
        console.log(multiplicación(numero1, numero2));
    }else if(eleccion == "5"){
        console.log(potencia(numero1, numero2));
    }else if(eleccion == "6"){
        var resultadoSuma = suma(numero1, numero2);
        console.log("El doble de la suma de ", numero1, " y ", numero2, " es ", multiplicación(resultadoSuma, 2));
    }else if(eleccion == "7"){
        var resultadomultiplicacion = multiplicación(numero1, numero2);
        console.log("La mitad de la multiplicacion de ", numero1, " y ", numero2, " es ", división(resultadomultiplicacion, 2)); 
    }else if(eleccion == "8"){
        var resultadoResta = resta(numero1, numero2);
        console.log("El triple de la resta de ", numero1, " y ", numero2, " es ", multiplicación(resultadoResta, 3)); 
    }else if(eleccion == "9"){
        var resultadopotencia = potencia(numero1, numero2);
        console.log("La quinta parte de la potencia de ", numero1, " y ", numero2, " es ", división(resultadopotencia, 5)); 
    }else if(eleccion == "10"){
        var resultadodivision = división(numero1, numero2);
        console.log("el cociente de ", numero1, " y ", numero2, " aumentado 5 es ", suma(resultadodivision, 5)); 
    }else if(eleccion == "11"){
        var resultadopotenciabase = potencia(numero1, numero2);
        console.log("La potencia de ", numero1, " y ", numero2, " aumentado la base es ", suma(resultadopotenciabase, numero1)); 
    }else{
        console.log("Esta opcion no se encuentra en el menu")
    }
    
}