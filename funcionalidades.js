
var topping = prompt("Ingrese topping");

var topping;
var precio;
var preciofinal;
var helado;

if(topping = "oreo")
{
    console.log("oreo");
} else if(topping="kitkat"){
    console.log("kitkat");
} else if(topping="kinder"){
    console.log("kinder");
}

switch (topping) {
    case "oreo":
        console.log("El precio de oreo es $10")
        break;
    case "kitkat":
        console.log("El precio de kitkat es $15")
        break;
    case "kinder":
        console.log("El precio de kinder es $25")
        break;
    default:
        console.log("No tenemos ese topping")
}
console.log("Fin switch case");

var tamaño = prompt("Ingrese tamaño");

var topping;
var precio;
var preciofinal;
var helado;
var tamaño;



if(tamaño = "1kilo")
{
    console.log("1kilo");
} else if(tamaño = "1/2kilo"){
    console.log("1/2kilo");
} else if(tamaño = "1/4kilo"){
    console.log("1/4kilo");
} else if(tamaño = "1bocha"){
    console.log("1bocha");
} else if(tamaño = "2bochas"){
    console.log("2bochas");
} else if(tamaño = "vasito"){
    console.log("vasito");
}

switch (tamaño) {
    case "1kilo":
        console.log("Su precio es $6000")
    break;
    case "1/2kilo":
        console.log("$3000")
    break;
    case "1/4kilo":
        console.log("$2000")
    break;
    case "1bocha":
        console.log("$1000")
    break;
    case "2bochas":
         console.log("$2000")
    break;
    case "vasito":
        console.log("$2000")
    break;
    default: 
        console.log("No tenemos ese tamaño")
        break;
}
console.log("Fin switch case");


var menu= prompt("Ingrese menu");
var menu;
var carne;
var pescado;
var verdura;


if(menu = "carne")
{
    console.log("carne");
} else if(menu = "pescado"){
    console.log("pescado");
} else if(menu ="verdura"){
    console.log("verdura");
}

switch (menu) {
    case "carne":
        console.log("Bebida vino tinto")
        break;
    case "pescado":
        console.log("Vino blanco")
        break;
    case "verdura":
        console.log("Agua")
        break;
    default:
        console.log("Elija carne, pescado o verdura")
        break;
}
console.log("Fin switch case");

var array = [1,2,3,4,5,6];
for (let index = 0 ; index < array.length ; index++){
    console.log(array[1]);
    
}

for (let posicion = 0 ; posicion < array.length ; posicion++){
    console.log(array[posicion]);
}

var numero = false;

while (numero == false ) {
    console.log(numero<11);
    console.log("Numero es mas chico que 11");

    numero = true;
}
console.log("Fin while");
