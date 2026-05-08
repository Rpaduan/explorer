/*
    Operadore unários
    typeof
    delete
*/

let name = 'Renato'
console.log(typeof(name))

const person = {
    nome: 'Renato',
    age: 38
}

delete person.age // seleciono a propriedade que desejo excluir

console.log(person)