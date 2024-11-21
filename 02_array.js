const marvel_heroes = ["thor", "spiderman", "hulk"];
const dc_heroes = ["batman", "superman", "flash"];


const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);


//spread operator

const all_new_Heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_Heroes);


const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("anuj"))
console.log(Array.from("akira"))
console.log(Array.from({name: "anna"})); // intersting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

