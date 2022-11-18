/*Crea una función que redondee un número float a un número específico de decimales.
La función debe tener dos parámetros:
Primer parámetro es un número float con x decimales
Según parámetro es un int que indique el número de decimales al que redondear
Evitar usar el método toFixed*/

const roundedResult = (number, roundTo) => {
    return Math.round(number * 10 ** roundTo) / 10 ** roundTo;
};

console.log("El valor redondeado será: " + roundedResult(1.123456789, 6));