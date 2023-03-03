const pessoa = {
    nome: 'Ana', 
    idade: 5, 
    endereco: {
        lagradouro: "Rua abc",
        numero: 1000
    }
}
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(i)

const {sobrenome, bemHumarada = true} = pessoa
console.log(sobrenome, bemHumarada)

const {endereco: {lagradouro, numero, cep } } = pessoa
console.log(lagradouro, numero, cep)

const {conta: { agencia, num } } = pessoa
console.log(agencia, num)