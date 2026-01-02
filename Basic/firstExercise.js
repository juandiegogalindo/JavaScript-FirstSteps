// 1. Escribe un comentario en una línea
// Comentario de una linea
// 2. Escribe un comentario en varias líneas
/*
        Comentario de varias lineas
    */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let nombre = "Juan Diego Galindo";
let edad = 20;
let isStudent = true;
let telefono = null;
let simboloCorreo = Symbol("jdgalindo6@gmail.com");
let cedulaFechaNacimiento = 101108585406072005n;
// 4. Imprime por consola el valor de todas las variables
console.log(nombre);
console.log(edad);
console.log(isStudent);
console.log(telefono);
console.log(simboloCorreo);
console.log(cedulaFechaNacimiento);
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof isStudent);
console.log(typeof telefono);
console.log(typeof simboloCorreo);
console.log(typeof cedulaFechaNacimiento);
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "Andres Galindo";
edad = 53;
isStudent = false;
telefono = null;
simboloCorreo = Symbol("jugance@hotmail.com");
cedulaFechaNacimiento = BigInt(7957748012041971);

console.log("Valores de las variables modificadas");
console.log(nombre);
console.log(edad);
console.log(isStudent);
console.log(telefono);
console.log(simboloCorreo);
console.log(cedulaFechaNacimiento);
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = 52050498;
edad = true;
isStudent = "No es mi mamá";
telefono = Symbol(3204425620);
simboloCorreo = BigInt(12345678901234567890);
cedulaFechaNacimiento = null;

console.log("Valores de las variables modificadas a otro tipo");
console.log(nombre);
console.log(edad);
console.log(isStudent);
console.log(telefono);
console.log(simboloCorreo);
console.log(cedulaFechaNacimiento);
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constNombre = "Yazmin Montenegro";
const constEdad = null;
const constIsMon = true;
const constTelefono = 3107920018;
const constSimbolo = Symbol("yazminmon@hotmail.com");
const constFechaNacimiento = 52050498n;

console.log("Variables de constantes");
console.log(constNombre);
console.log(constEdad);
console.log(constIsMon);
console.log(constTelefono);
console.log(constSimbolo);
console.log(constFechaNacimiento);
// 9. A continuación, modifica los valores de las constantes
constNombre = "Laura Valentina Galindo";
constEdad = Symbol(21);
constIsMon = false;
constTelefono = 3115484324;
constSimbolo = BigInt(98765432109876543210);
constFechaNacimiento = null;
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
/*
    Lineas desde la 43 a la 48 porque las constantes no pueden ser reasignadas
*/
