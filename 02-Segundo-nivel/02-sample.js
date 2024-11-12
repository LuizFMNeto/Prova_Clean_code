function verificarSePodeDirigir(idade) {
    const maiorIdade = 18;
    if (idade >= maiorIdade) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}

const idadeDoUsuario = 16;
console.log(verificarSePodeDirigir(idadeDoUsuario));
