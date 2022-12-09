// con # podemos definir un metodo como privado y exclusivo de la clase contructor

class animal {
    constructor(animal, color){
        this.animal = animal;
        this.color = color;
    }

get #nAnimal() {
    return this.animal;
}

set #nAnimal(a) {
    this.animal = a;
}

animalColor() {
 return console.log(`El ${this.animal} es de color ${this.color}`);
}
}

const perro = new animal ("perro", "cafe");
perro.nAnimal = "Blanco";
console.log(perro.nAnimal);
perro.animalColor();
