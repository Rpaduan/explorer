/*
    Type conversion (typecasting) vs Type conversion

    *Alterção de um tipo de dado para outro tipo
*/

console.log('9' + 5) // coersion, o js transformou o 5 de number para string e concatenou

console.log(Number('9') + 5) // conversion, o programador converteu uma string para number e o js somou

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false 
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(null ? 'verdadeiro' : 'false')

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "false"
    -1
    Infinity
    -Infinity
*/

console.log(NaN ? 'verdadeiro' : 'falso')
