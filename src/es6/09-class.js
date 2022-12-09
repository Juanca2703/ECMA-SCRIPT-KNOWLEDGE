
// creando una clase
class user {
    sayHello() {
        return "Hello!";
    }
}
// instanciando una clase
const user = new user;
// accediendo a su metodo
console.log(user.sayHello());

//El contructor POO
//creando una clase con un contructor

class person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    sayHello(){
        return "Hello";
    }

    greeting() {
        return console.log(`${this.sayHello()} ${this.name} ${this.lastName}` );
    }
}

// instanseando un nuevo objeto

const persona = new person("Alberto", "Posada");
persona.greeting();

// Metodos get y set

class animal {
    constructor(animal, color){
        this.animal = animal;
        this.color = color;
    }

get nAnimal() {
    return this.animal;
}

set nAnimal(a) {
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


