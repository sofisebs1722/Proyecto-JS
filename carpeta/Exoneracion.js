var contraseña
contraseña=prompt("Ingrese la contraseña")
if (contraseña.length >12){
console.log("La contraseña cumple con los caracteres necesarios"); 
    }else{
    console.log("La contraseña no cumple con los caracteres necesarios")}
if (contraseña[0]== "A" || contraseña[0]=="E" || contraseña[0]=="I" || contraseña[0]=="O" || contraseña[0]=="U")
    if (contraseña[contraseña.length-1]== "0" || contraseña[contraseña.length-1]== "1" || contraseña[contraseña.length-1]== "2" || contraseña[contraseña.length-1]== "3" || contraseña[contraseña.length-1]== "3" || contraseña[contraseña.length-1]== "4" || contraseña[contraseña.length-1]== "5" || contraseña[contraseña.length-1]== "6" || contraseña[contraseña.length-1]== "7" || contraseña[contraseña.length-1]== "8" || contraseña[contraseña.length-1]== "9"){
    console.log("La contraseña es segura")
}else{
    console.log("La contraseña no es segura")
 }
