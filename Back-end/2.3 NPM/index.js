var generateName = require('sillyname');
const superheroes = require('superheroes');
var sillyName = generateName(); 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

var superhero=superheroes.random();


//import genarateName from "sillyname";


console.log(`My name is ${sillyName}. I am ${superhero}`);
