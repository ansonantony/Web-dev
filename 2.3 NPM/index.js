// import gerenateSuperhero from "superheros";
// const name = gerenateSuperhero();


// console.log(`My SuperHero name is ${name} .`);

import { generateSillyPassword,analyzePassword } from 'silly-password-generator';
var password = generateSillyPassword({wordCount:6});
console.log(password);
console.log(analyzePassword(password));
