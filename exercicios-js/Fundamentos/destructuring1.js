//Recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: '5',
    endereco: {
        logradouro: 'Rua abc',
        numero: 1001
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

      