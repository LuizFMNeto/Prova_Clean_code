async function buscarPersonagem(idPersonagem) {
    const url = (`https://swapi.dev/api/people/${encodeURIComponent(idPersonagem)}`);
    try {
        const respostaPersonagem = await fetch(url);  
        if (!respostaPersonagem.ok){
            throw new Error(`Erro na requisicao: ${respostaPersonagem.status}`);
        }
        const dadosPersonagem = await respostaPersonagem.json();
        console.log(dadosPersonagem);
    } catch (erro) {
        console.error(`Erro ao buscar personagem ${idPersonagem}`, erro);
    }
}

const buscarIdPersonagem = 1;
buscarPersonagem(buscarIdPersonagem);
