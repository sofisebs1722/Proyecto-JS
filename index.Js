console.log("Hola mundo");
// comentarios en linea 
/*comentario
de 
varias 
lineas*/


//Variables
var primerVariable;
let edadUsuario;
//Declarar variables
var nombreVariable; 
//Crear variable sin asignar valor
/*
Inicializar variables: 
Asignar un valor al momento de crear la variable 
*/
var gradoEstudiante="10A";
/*
Asignar un valor:
Igualar una variable existente a un nuevo valor 
*/
edadUsuario= 16;
//Asignar valor desde otra variable 
console.log(edadUsuario);
var edad= 17;
edadUsuario= edad;
console.log(edadUsuario);
/*
Asignar valor desde el teclado: 
Existen 2 maneras de hacerlo la primera es por ventana emergente y la segunda es por medio de un formulario en html
*/
var valor= prompt("");
console.log ("la variable vale " + valor );
/*
Constantes:
Son valores que no pueden ser cambiados durante la ejecución del código. Las constantes siempre deben ser inicializadas 
*/
const PI= 3.1416;
//Imprimir por consola 
//simple 
console.log ("...");
console.log(valor );
//concatenado 
console.log("" + valor );
prompt ("ingrese un valor: ");
//Operadores
//Suma
var Suma;
Suma=5+4; //9 
console.log(Suma);
var a=12;
Suma=a+8; //20
console.log(Suma);
var b=20;
Suma= a+b; //32
console.log(Suma);
//Resta
var Resultado;
Resultado=a-b; //-8
console.log(Resultado);
Resultado=b-a; //8
console.log(Resultado);
//Multiplicación
var producto
producto=a*b; //240
console.log(producto);
//Division
var cociente
cociente=a/b; //0.6
console.log(cociente);
cociente=b/a; //1.6666667
console.log(cociente);
//orden de operaciones 
var result 
result=a*b; //240
console.log(result);
result= a*b-10; //230
console.log(result);
result=a*(b-10); //120
console.log(result);
//exponente/potencia
var exponente=3**2;
console.log(exponente);
exponente=3**3; //3**3 =27
console.log(exponente);

//cadenas o string
var cadenita1="3";
var cadenita2="5";
var sumacadenas= cadenita1 + cadenita2; 
console.log(sumacadenas);

var nombrecito= "Sofia";
var apellido= "Montoya";
var nombreCompleto= nombrecito + " " +  apellido;
console.log(nombreCompleto);

var longitud= nombrecito.length;
console.log(longitud);
console.log(nombreCompleto.length);

//Encontrar caracteres dada la posición en el vector
var primeraLetra;
primeraLetra= nombrecito[0];
console.log(primeraLetra);
console.log(nombrecito[1]);
console.log(nombrecito[2]);
console.log(nombrecito[3]);
console.log(nombrecito[4]);

//Encontrar la última posición de una cadena o vector.
//Se debe buscar la longitud de la cadena y restarle 1 para encontrar la ultima letra.
console.log(nombrecito[nombrecito.length-1]);

//Valores inmutables
//Las posiciones de una cadena se pueden consultar pero no se pueden reasignar su valor.
nombrecito[0]= "p";
console.log(nombrecito);
nombrecito= "Sebastián";
console.log(nombrecito);




