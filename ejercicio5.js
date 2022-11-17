/*Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain.
El valor de isSpain será un booleano indicando si es una ciudad de España.*/

const arrCities2 = [
    { city: 'Logroño', country: 'Spain', capital: false },
    { city: 'Bordeaux', country: 'France', capital: false },
    { city: 'Madrid', country: 'Spain', capital: true },
    { city: 'Florence', country: 'Italy', capital: true },
    { city: 'Oslo', country: 'Norway', capital: true },
    { city: 'Jaén', country: 'Spain', capital: false }
]


const noCapital = arrCities2
    .filter(cities => !cities.capital && cities.country === 'Spain')
    .map(cities => ({
        city: cities.city, isSpain: cities.country === 'Spain'
    })
    );


console.log(noCapital);