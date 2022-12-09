var nombre = "Camilo";
let fruta = "papa";
const color = "azul"; //valor estatico 
 
const fruits = () => {
    if (true) {

        var fruit1 = "guayaba"; // global scope 
        let fruit2 = "pera"; // block scope
        const fruit3 = "banano";// block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();