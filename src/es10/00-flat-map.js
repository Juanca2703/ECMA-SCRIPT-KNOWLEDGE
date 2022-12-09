const array = [1,2,3,[2,3,4,[11,23,45]]];
console.log(array.flat(3));

//flatmap

const array2 = [0,4,5,6,4];
console.log(array2.flatMap(v => [1 , v * 2]));