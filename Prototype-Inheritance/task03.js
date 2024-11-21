// 3. Extend Prototype
/*  Write a function that receives a class and attaches a species property with the value
Human and a toSpeciesString() method that returns a string in the format I am a
<species> . <toString()> */

class Creature {}

function attachPropertyAndMethod(cls) {
	cls.prototype.species = "Human";
	cls.prototype.toSpeciesString = function () {
		return `I am a <${this.species}>. <toString()>`;
	};
}

attachPropertyAndMethod(Creature);
const creature1 = new Creature();

console.log(creature1.species);
console.log(creature1.toSpeciesString());
