// var é global e, também local
// hoisting (elevação)
// o JS pega a var e eleva para antes do bloco
// var x

console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)