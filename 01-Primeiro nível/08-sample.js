let pessoa = { nome: "Maria", idade: 28 };
const maiorIdade = 18;

function verificarMaiorDeIdade(pessoa) {
    return pessoa.idade >= maiorIdade;
}

console.log(verificarMaiorDeIdade(pessoa));
