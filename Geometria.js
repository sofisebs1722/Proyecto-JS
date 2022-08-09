
function suma (num1, num2){
    var resultado = num1 + num2;
    var mensaje = "el resultado de sumar "+ num1 + " y " + num2 + " es " + resultado;
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

function main_geometria(){
    var eleccion=prompt("Por favor ingrese que desea hallar:\n 1.Area de la figura \n 2.Perimetro de la figura")
    var eleccionFigura=prompt("Por favor ingrese que figura desea: \n 1.Cuadrado \n 2.Rectangulo")
    var x= parseFloat(prompt("por favor ingrese el primer valor:"));
    var y= parseFloat(prompt("por favor ingrese el segundo valor:"));
    if (eleccion=="1" &&eleccionFigura=="1"){
        console.log("El area del cuadrado es ", potencia(x, 2))
    }else if(eleccion=="2" && eleccionFigura=="1"){
        console.log("El perimetro del cuadrado es", multiplicación(x, 4))
    }else if(eleccion=="1" && eleccionFigura=="2"){
        console.log("El area del rectangulo es ", multiplicación(x, y))
    }else if(eleccion=="2" && eleccionFigura=="2"){
        var resultadomultiplicacion1 = multiplicación(x, 2)
        var resultadomultiplicacion2 = multiplicación(y, 2)
        console.log(suma("El perimetro del rectangulo es ",resultadomultiplicacion1, resultadomultiplicacion2))
    }else{
        console.log("Esta opcion no se encuentra en el menu")
    }
    
}