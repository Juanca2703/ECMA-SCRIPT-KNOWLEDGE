const user = {userName: "Camilo", age: 21, country: "CO"};
//asignacion de variables age y country a la palabra reservada values
const {userName, ...values} = user;
console.log(userName);
console.log(values);