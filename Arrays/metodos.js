'use strict'

// 1. Cadena a arreglo
let cadenaDias = "lunes_martes_miercoles_jueves_viernes_sabado_domingo";
let miArray = cadenaDias.split("_");
//console.log(miArray);

//2. Buscar si no encuentra el valor devuelve un undefined
//Función anónima ()=>{}  clásica function(){}

const result =miArray.find((e)=> e === "viernes");

const index = miArray.findIndex((e) => e === "domingo");
//console.log(index);

//3. comprueba si existe un elemento dentro de un array true o false
//console.log(miArray.includes("viernes9"));

//4. Filtrar elementos
let miArray2 = [];
for(let i=0; i<25; i++){
    miArray2[i] = i +3;

}
console.log(miArray2);
const response = miArray2.filter((e) => e % 2 === 0)
console.log(response);

//Consultar metodos: map, some, every, reduce, concat
