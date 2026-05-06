//function scope

let subject = 'create video'

function createThink() {
    subject = 'study' //aqui troquei o valor de subject dentro do scope, caso não fosse trocado, os dois console.log mostrariam 'create video'
    return subject
}

console.log(subject)
console.log(createThink(subject))

//a ordem altera o resultado

/*
    console.log(subject)
    → 'create video'
    createThink()
    → muda subject para 'study'
    → retorna 'study'
*/

/*
    createThink()
    → muda subject para 'study'
    → retorna 'study'
    console.log(subject)
    → já está 'study'
*/