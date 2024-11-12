class Gestor {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const idadeUsuario = 40;
const pessoa = new Gestor("Lucas", idadeUsuario);

console.log(pessoa);
