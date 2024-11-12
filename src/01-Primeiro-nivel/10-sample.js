const usuario = {
    nome: "João",
    idade: 25
};

function getInfoUser(usuarioParametro) {
    console.log(`${usuarioParametro.nome} tem ${usuarioParametro.idade} anos.`);
}

getInfoUser(usuario);
