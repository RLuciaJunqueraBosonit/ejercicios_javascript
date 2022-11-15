// Dado tres arrays de números, sacar en un nuevo array la intersección de estos.

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

const arrNumber4 = arrNumber1.filter((x) => arrNumber2.filter((x) => arrNumber3.includes(x)).includes(x));

console.log("The common elements are: " + arrNumber4);