// Generator 

function* iterator(array){
    for (let a of array){
        yield a;
    }
}

const it = iterator(["Juan", "Pedro", "Camilo", "Mateo", "Juana"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);