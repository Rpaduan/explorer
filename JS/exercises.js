// 1.Declare uma variável de nome weight
//let weight

// 2.Que tipo de dado é a variável acima?
//console.log(typeof weight)
// R:undefined

/* 3.Declare uma variável e atribua valores para cada um dos dados:

    *name: string
    *age: Number (integer)
    *stars: Number (float)
    *isSubscribed: Boolean
*/

/*
    let name, age, stars, isSubscribed

    name = 'Renato'
    age = 38
    stars = 4.5
    isSubscribed = true

    console.log(name, age, stars, isSubscribed)
*/

//ou

/*let name = 'Renato'
let age = 38
let stars = 4.5
let isSubscribed = true

console.log(name, age, stars, isSubscribed)*/


// 4.A variável estudante abaixo é de que tipo de dados?
// R:object

// 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.


// 4.2 Mostre no console a seguinte mensagem:
    // <name> de idade <age> pesa <weight> kg.
    // Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

   let student = {
        name: 'Renato',
        age: 38,
        weight: 73.7,
        isSubscribed: true,
    };

    let student2 = {
        name: 'Mayk',
        age: 23, 
        weight: 74.8,
        isSubscribed: false,
    };
/* 
    console.log(typeof student)

    console.log(`${student.name} de idade ${student.age} pesa ${student.
    weight} kg.`)
*/

// 5.Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
//let students = []

// 6.Reatribua valor para a variável acima, colocando dentro dela o objeto da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array).
let students = [
    student,
    student2
]

console.log(students)

// 7.Coloque no console o valor da posição zero do Array acima
console.log(students[0])

// 8.Crie um novo student e coloque na posição 1 do Array students
console.log(students[1])

students[1] = student2
console.log(students)

// 9.Sem rodar o código responda qual é a resposta do código abaixo e por quê? Após sua resposta, rode o código e veja se você acertou.
//R:undefined, pq a var faz o hoisting (eleva) a declaração (nome), mas não a atribuição (valor)
 console.log(a)
 var a = 1


   