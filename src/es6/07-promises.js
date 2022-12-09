const anotherFunction = () =>{
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Yeah!");
        } else {
            reject("Buuu");
        }
    })
}

anotherFunction().then(response => console.log(response)).catch(err => console.log(err));