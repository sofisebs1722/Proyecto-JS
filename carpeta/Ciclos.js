var CantSaludos = 0;
 
while(CantSaludos <10){
    console.log("Hola ");
    CantSaludos += 1;
}

//1- se cambia CantSaludos <5 a <10
//2- 5 ya que el numero 10 se divide entre  CantSaludos += 2 dice de cuanto en cuanto aumenta o disminuye

/*var respuesta ="si";
 
while(respuesta=="si"){
    console.log("Dijo sí");
    respuesta=prompt("ingrese un valor");
}  */                                                     
 
var valor = true;
var respuesta2;
 
while(valor){
    console.log("valor es " + valor);
    respuesta2=prompt("ingrese un valor 1 verdadero 0 falso");
    if(respuesta2 == 0){
        valor = false;
    }      
}

