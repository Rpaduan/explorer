// declaração or declaration
var name

// assignment or atribuição de valores
name = "Renato"

//que tipo de dado foi colocado na variável
console.log(typeof name)

//qual o valor da variável name
console.log(name)

/*
let age = 20
let isHuman = true
*/

// agrupamento de declarações
let age, isHuman

age = 38
isHuman = true

//multiplos argumentos na função
console.log(name, age, isHuman)

//escrits de texto mais variáveis (concatenação)
console.log("O", name, "tem", age, "anos")
console.log("O " + name + " tem " + age + " anos")

//interpolando valores com template literals or template strings
console.log(`O ${name} tem ${age} anos`) // template string, maneira mais atual de concatenação

// Object

const person = {
    name: 'Renato',
    age: 38,
    weight: 73.7,
    isAdmin: true
}

console.log(`O ${person.name} tem ${person.age} anos e pesa ${person.weight} kg`)

// Array

const animals = [
    'Lion',
    'Monkey', 
    {
        name: 'Cat',
        age: 3
    }
]

//acessar valores dentro do Array
console.log(animals)
console.log(animals[1])
console.log(animals[2].age)


