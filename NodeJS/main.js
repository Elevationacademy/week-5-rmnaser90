// const message = "hello world!"
// const enemies = [
//     { e: "Plastic" },
//     { e: "Cigarettes" },
//     { e: "The Man" }
// ]

// for (let enemy of enemies) {
//     console.log(enemy.e)
// }
// console.log(message);

const circleUtilities = require('./circle');
console.log(circleUtilities);
const r = 4
console.log(`The area of a circle with radius ${r} is ${circleUtilities.calcCircleArea(r)}`)
