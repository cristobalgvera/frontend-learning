console.log([3, 0, 4, 0].reduce((ac, e) => ac+e, -4));
console.log([3, 0, 4, 0].filter(elem => elem === 4));
console.log([3, 0, 4, 0].findIndex(elem => elem > 3));
console.log([3, 0, 4, 0].filter(e => e > 1).find(e => e > 3));
console.log([3, 0, 4, 0].map(elem => 0));

console.log("Es hoy".match(/[aeiou]/gi));

console.log("Hay 13 niños \nde 10 años".match(/[0-9]/)[0]);
// console.log("Hay 13 niños \nde 10 años".match(/^de/)[0]);
console.log("Hay 13 niños \nde 10 años".match(/^.../)[0]);
// console.log("Hay 13 niños \nde 10 años".match(/[0-9]$/)[0]);
// console.log("Hay 13 niños \nde 10 años".match(/hay/)[0]);

console.log("Hay 23 niños de 2 años".match(/[0-9]+/)[1]);
console.log("Hay 23 niños de 2 años".match(/[a-zñáéíóú]+/ig)[1]);
console.log("Hay 23 niños de 2 años".match(/xyz/));
console.log("Hay 23 niños de 2 años".match(/n[iños]+?/)[0]);
console.log("Hay 23 niños de 2 años".match(/[\wñáéíóú]+/ig)[1]);

console.log("niños".replace(/niñ(os)/, "añ$1"));
console.log("niños".replace(/(ni)ñ(os)/, "$2"));
console.log("niños".replace(/ni/, "a"));
console.log("niños".replace(/(ni)ñ(os)/, "$1"));
console.log("niños".replace(/ños/, ""));