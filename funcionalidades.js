
var topping = prompt("Ingrese topping");

var topping;
var Preciofinal = 10000

if(topping == "oreo"){
     console.log(Preciofinal + 10);
} else if(topping="kitkat"){
    console.log(Preciofinal + 15);
} else if(topping="kinder"){
    console.log(Preciofinal + 25);
}



var menu= prompt("Ingrese menu");
var menu;


if(menu == "carne"){
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
var arraymostrar = [];
for (let index = 0 ; index < array.length ; index++){
    arraymostrar.push(array[index]);
    
}

for (let index = 0 ; index< arraymostrar.length ; index++){
    console.log(array[index]);
}

var numero = 0;

while (numero<11){
    console.log(numero + " es menor que 11");
     numero++
}
console.log("Fin while");
