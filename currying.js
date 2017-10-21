const greetingsConstructor = name => place => age =>
  `My name is ${name} I'm from ${place} and I'm ${age} years old`

const name = greetingsConstructor("Eddie")
const place = name("Scottsdale")
console.log(place.toString())
const age = place("24")

console.log(age)



