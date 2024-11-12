async function buscarDadosDoPersonagem() {
    const dadosGeraisPersonagens = "{\"nome\": \"Luke\", \"idade\":23}";
    const dadosPersonagem = JSON.parse(dadosGeraisPersonagens);
    console.log(dadosPersonagem.nome);
    console.log(dadosPersonagem.idade);
}

buscarDadosDoPersonagem();
