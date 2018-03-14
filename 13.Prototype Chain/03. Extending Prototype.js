let Person = require('./01.Person and Teacher')

function extendClass(classToExtend){
    classToExtend.prototype.species = 'Human'
    classToExtend.prototype.toSpeciesString = function (){
        return `I am a ${this.species}. ${this.toString()}`
    }
}

extendClass(Person)
let p = new Person('Name', 'email')
console.log(p)