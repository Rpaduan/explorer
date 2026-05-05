/*
    String

    *Cadeia de caracteres

    "" // aspas duplas
    '' // aspas simples
    `` // template literals ou template strings
*/

console.log('Renato')
console.log("Renato")
console.log("Renato 'Paduan'") //qnd preciso q apareçam aspas simples no texto, uso aspas duplas na string
console.log('Renato "Paduan"') //qnd preciso q apareçam aspas duplas no texto, uso aspas simples na string
console.log(`Renato de "Sousa" 'Paduan'`) //qnd preciso q apareçam aspas duplas e aspas simples no texto, uso crase na string
console.log(`Renato de 
    Sousa
    Paduan`) //posso pular linhas com uso de crase na string
console.log(`Renato ${1 + 1}`) //posso adicionar expressões dentro da string com o uso das crases (interpolação)