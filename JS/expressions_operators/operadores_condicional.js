// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes 

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top
let pao = false
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
// se eu tenho pão ou queijo, então meu café é top, senão meu café é ruim

console.log(niceBreakfast)

let age = 17

const canDrive = age >= 18 ? 'Can Drive' : "Can't Drive"
// se eu tenho 18 anos ou mais eu posso dirigir, se não eu não posso

console.log(canDrive)