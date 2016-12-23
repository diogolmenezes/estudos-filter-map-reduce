"use strict";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter não altera a lista original
console.log(numbers.filter(x => x > 5));
console.log(numbers.filter((item) => item > 5));
console.log(numbers);

// Filter também funciona com objetos
let items = [{ name: 'Chair' }, { name: 'Dor' }, { name: 'Table' }];

console.log(items.filter(x=> x.name == "Dor"));
console.log(items.filter(x=> x.name.length > 3));
console.log(items);
