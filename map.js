"use strict";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map varre o array e altera seu valor original
console.log(numbers.map(x => { x = 10; return x; }));
console.log(numbers);

// Map também funciona com objetos
let items = [{ name: 'Chair' }, { name: 'Dor' }, { name: 'Table' }];

console.log(items.filter(x=> { 
    if (x.name == 'Dor')
        x.name = 'New Dor'
    return x;
 }));

console.log(items);
