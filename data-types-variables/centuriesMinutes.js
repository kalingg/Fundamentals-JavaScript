function converter (centories){

let years= centories * 100; 

let days = Math.ceil((365.24 * 100) * centories);

let hours = days * 24;

let minutes = 60* hours;

console.log(`${centories} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}
converter(1)
converter(5)