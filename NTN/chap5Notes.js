// Example of a object Literal
const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};
//empty oject literal, with the variable spiderman
const spiderman = {};
//using a constructer function to create empty object not recomended
//const spiderman = new Object();
//create variables for the superhero and his real name
const name = 'Iron Man';
const realName = 'Tony Stark';
//short ES6 way
const ironMan = { name, realName };
//checking the object to make sure that it works
console.log(superman.name);
