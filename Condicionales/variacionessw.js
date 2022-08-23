/**
 * Determinar la calificacion de un estudiante 
 * segun la siguiente escala de ponderacion:
 * 0 y 2.9 la ponderacion es insuficiente. 
 * 3.0 y 3.5 ponderacion es regular.
 * 3.6 y 4.0 ponderacion es bien.
 * 4.1 y 4.5 muy bien.
 * 4.6 y 5.0 Es excelente.
 */

'use strict'

let calificacion;
calificacion = prompt(calificacion);
let mensaje
mensaje = "";
switch(true){
    case calificacion >= 0 && calificacion <=2.9:
        //Template String
        mensaje = `Insuficiente la calificación: ${calificacion}`;
        alert ("Insuficiente la calificacion");
        break;
    case calificacion >= 3.0 && calificacion <=3.5:
        //Template String
        mensaje = `Regular la calificación: ${calificacion}`;
        break;
    case calificacion >= 3.6 && calificacion <= 4:
        //Template String
        mensaje = `Bien la calificación: ${calificacion}`;
        break;
    case calificacion >= 4.1 && calificacion <=4.5:
        //Template String
        mensaje = `Muy Bien la calificación: ${calificacion}`;
        break;
    case calificacion >= 4.6 && calificacion <= 5:
        //Template String
        mensaje = `Excelente la calificación: ${calificacion}`;
        break;
    default:
        mensaje = `La calificacion no puede se procesada. ${calificacion}`;
        break;    
    
}

console.log(mensaje);


