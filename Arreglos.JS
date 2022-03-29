/*
Los arreglos son estructuras que almacenan información de cualquier tipo de dato, es decir, string, int, double, array, objetos, entre otros.Los arreglos tienen operaciones tales como consultar, modificar, insertar y eliminar.
Los arreglos se declaran con corchetes []
*/ 
//Creacion de arreglos
var arreglo =["Juan", 14];
console.log (arreglo);
//Arreglo de arreglos 
var notasEstudiantes = [["sofia", 5.0],["Sebastian", 4.0]];
console.log (notasEstudiantes[0]);
console.log (notasEstudiantes[1]);
console.log (notasEstudiantes[0][0]);//"SOFIA"
console.log (notasEstudiantes[0][1]);//5.0 NOTA SOFIA
console.log (notasEstudiantes[1][1]);//5.0 NOTA SEBASTIAN 
//Modificar elementos
console.log (arreglo[0] + " tiene " + arreglo[1]);
arreglo[1] = 15;
console.log (arreglo[0] + " tiene " + arreglo[1] + " años ");
//Modificar nota estudiante 
notasEstudiantes[1][1]=5.0;
console.log (notasEstudiantes[1][0] + " obtuvo " +notasEstudiantes[1][1] + " en su nota final" );
//Agregar elementos al arreglo 
console.log("Sin agregar " + arreglo);
arreglo.push("10A");
console.log("Agregado " + arreglo);
 //Agregar elementos al arreglo desde el inicio 
console.log("Sin agregar " + arreglo);
arreglo.unshift("Perez");
console.log("Agregado " + arreglo);
 //Eliminar elementos al arreglo 
console.log("Sin eliminar " + arreglo);
arreglo.pop();
console.log("eliminado " + arreglo);
 arreglo.shift(); //Elimina el primer elemento
 console.log("Elimina.shift" + arreglo);

 //ejercicio
 /* 
1-
 crear el arreglo con los valores 
 -Analisis
 -Tecnologia 
 -Desarrollo
 2- cambiar desarrollo por BBDD
 3- convertir vector en:
-Introduccion 
-Analisis
-Tecnologia
*/
//Solucion 1
var Asignaturas = ["Analisis", "Tecnologia", "Desarrollo"];
console.log(Asignaturas);
//Solucion 2
Asignaturas[2] = ("BBDD");
console.log(Asignaturas);
//Solucion 3
Asignaturas.unshift("Introduccion");
Asignaturas.pop();
console.log(Asignaturas);
