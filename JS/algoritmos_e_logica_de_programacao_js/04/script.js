/*
    Solicitar o nome do aluno e as 3 notas do bimestre, calcular a média daquele aluno.

    A média positiva deverá ser maior que 6

    Se o aluno passou no bimestre, dar os parabéns.

    Se o aluno não passou no bimestre, motivar o aluno a dar o seu melhor na prova de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome e a nota do aluno
*/

// let name = prompt("Nome do aluno")
// let noteOne = prompt("Digite a primeira nota")
// let noteTwo = prompt("Digite a segunda nota")
// let noteTree = prompt("Digite a terceira nota")

// noteOne = Number(noteOne)
// noteTwo = Number(noteTwo)
// noteTree = Number(noteTree)

// let media = (noteOne + noteTwo + noteTree) / 3

// let result = media > 6

// media = media.toFixed(2)

// if (result) {
//     alert(`Parabéns ${name}! sua média foi ${media} e você passou`)
// } else if (media < 3){
//     alert(`${name}, sua média foi ${media} e infelizmente você foi reprovado`)
// } else {
//     alert(`${name}, sua média foi ${media}, e infelizmente você não passou. Estude para a prova de recuperação`)
// }

let name = prompt("Nome do aluno")
let gradeOne = prompt("Digite a primeira nota")
let gradeTwo = prompt("Digite a segunda nota")
let gradeTree = prompt("Digite a terceira nota")

gradeOne = Number(gradeOne)
gradeTwo = Number(gradeTwo)
gradeTree = Number(gradeTree)

let media = (gradeOne + gradeTwo + gradeTree) / 3

media = media.toFixed(2)

if(media > 6) {
    alert(`Párabéns ${name}, sua média foi ${media} e você passou!`)
} else if(media < 3) {
    alert(`${name}, sua média foi ${media} e infelizmente você reprovou.`)
} else {
    alert(`${name}, sua média foi ${media}, estude mais para aprova de recuperação`)
}

