// Manipulando Strings e números


/*
    //Transformar String em Número e Número em String


        let string = "123"
        console.log(Number(string)) //Transforma a variável 'string' de String para Number

        let number = 321
        console.log(String(number)) //Transforma a variável 'number' de Number para String 
*/

/*
    //Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

        let word = "Paralelepípedo"
        console.log(word.length) // .length faz a contagem de caracteres

        let number = 1234
        console.log(String(number).length) // aqui tem que converter de Number para String, pois Number não tem .length
*/

/*
    // Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

        let number = 345.1514815
        console.log(number.toFixed(2).replace(".", ",")) // aqui trabalhamos com métodos, .toFixed() para delimitar quantas casas decimais queremos após o ponto, e replace() para trocar o ponto por vírgula, porém a vírgula não faz parte de um número e o Number se transforma numa String
*/


/*
    // Transforme letras minúsculas em maiúsculas. Faça o contrário também
        let word = "Programar é muito divertido!"
        console.log(word.toUpperCase())
        console.log(word.toLowerCase())
*/

/*
    // Separe um texte que contém espaços, em um novo array onde cada palavra é uma posição do array. Depois disso, transforme o array em um trxto e onde eram espaços, coloque _

        let phrase = "Eu quero viver o Amor!"
        let myArray = phrase.split(" ") //criei uma nova variável e peguei a variável phrase e transformei em array com o método .split, separando cada item onde havia um espaço " ".
        console.log(phrase)
        console.log(myArray)
        let phraseWhithUnderscore = myArray.join("_") //criei uma nova variável e peguei a variável myArray e transformei em string com o método .join, e onde eram as separações com espaço, foi adicionado o underscore "_".
        console.log(phraseWhithUnderscore)
*/


/*
    // Verificar se o texto contém a palavra Amor

        let phrase = "Eu quero viver o meuAmoreco!"
        console.log(phrase.includes("Amor")) //usando o método .includes podemos descobrir se exixte a palavra na frase, porém algumas ressalvas, o JS usa Case Sensitive aqui, ou seja, se a palvra estivesse em minúsculo não acharia, e mesmo que tenham caracteres a mais antes ou depois da palavra, ele vai encontrar.
*/

/*
    // Criar Array com constructor 

        let myArray = ['a', 'b', 'c']
        console.log(myArray)

        let myArray2 = new Array('a', 'b', 'c')
        console.log(myArray2)
*/

/*
    // Contar elementos de um array
    console.log(['a', 'b', 'c'].length)
*/

/*
    // Transformar uma cadeia de caracteres em elementos de um array

        let word = "manipulação"
        console.log(Array.from(word))
*/

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar no começo
techs.unshift("sql")

//remover do fim
//techs.pop("")

//remover do começo
//techs.shift()

//pehgar somente alguns elementos do array
//console.log(techs.slice(1, 3)) //o primeiro número é onde começa a seleção, e o último número é o último q é cortado

//remover um ou mais itens em qualquer posição do array
//techs.splice(1, 1)

//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1) //aqui achei a posição do 'css' e removi ele
console.log(index)

console.log(techs)