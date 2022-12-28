var numero = 1 //escopo global e escopo de funcao
{
    let numero = 2
    console.log('dentro =', numero) //escopo global, escopo de bloco
}
console.log('fora =', numero)