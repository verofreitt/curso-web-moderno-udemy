// par nome/valor

const saudacao = 'Opa' //contexto lexico 1

function exec() {
    const saudacao = 'Falaaa' //contexto lexico 2
    return saudacao
}

//Objetos são grupos aninhadosde pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    pesp: 90,
    endereco: {
        lagradouro: 'Rua muito legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)