"use strict";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Reduce varre o array e permite uso de acumuladores, que guardam os valores das iterações
// somando
var sum = numbers.reduce((accumulator,item) => {
    return accumulator + item;
}, 0);

console.log(sum);

// exemplo de filter com reduce
var result = numbers.reduce((acc, item) => {
    if(item > 5)
        acc.push(item);
    return acc;
}, [])

console.log(result);
