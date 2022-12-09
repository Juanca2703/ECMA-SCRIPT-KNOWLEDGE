// arrays destructuring

const a = ["banana", "pepino"]
const [ban,pep] = a;
console.log(ban,a[1]);

// destructuring objects

let user = { username: "pablo", age: 34 };
let { nombre, edad } = user;
console.log(nombre,edad);

//spread operator (...)

let person = {name: "Camilo", age: 21};
let country = "COL";

let data = {id: 1, ...person, country};

console.log(data);
