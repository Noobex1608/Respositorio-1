//cilos while
var contador = 5;
var contadorN2 = 30;
while( contador < 10 && contadorN2 > 20){
    console.log("ContadorN1: "  + contador + "ContadorN2: " + contadorN2);
    contadorN2 --;
    contador ++;
};
//ciclos Do-While
var contadorN3 = 1;
var condicion = "Hola"
do{
    console.log("Entraste al ciclo do while");
    if (contadorN3 == 2){
        condicion = "Adios"
    }
    contadorN3 ++;
}while (condicion == "Hola");
var condicionN2 = 25;
do{
    console.log("Valor: " + condicionN2);
    condicionN2 -= 5;
}while ( condicionN2 >= 5);

const prompt = require ('prompt-sync')();
//crear un programa que lea tantos números 
//como se quiera hasta que se reciba un cero,
//y se mostrará un resultado, que será la 
//suma de todos los números ingresados.

var ingresoNumeros;
var suma = 0;
console.log("Para salir del bucle ingresar 0");
do{
    ingresoNumeros = prompt("Dame un número: ");
    suma = suma + parseInt(ingresoNumeros);
}while(ingresoNumeros != 0);
console.log ("La suma total es: " + suma);
//prompt te da los datos en texto mas no en numeros