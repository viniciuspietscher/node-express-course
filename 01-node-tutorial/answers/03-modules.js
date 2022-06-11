const names = require("./04-names")
const sayHi = require("./05-utils")
const data = require("./06-alternative-flavor")
const { onePerson, items } = require("./06-alternative-flavor")

sayHi(names.peter)
sayHi(names.john)
sayHi("Vini")

console.log(data)
console.log(onePerson.name)
console.log(items[0])

require("./07-mind-grenade")
