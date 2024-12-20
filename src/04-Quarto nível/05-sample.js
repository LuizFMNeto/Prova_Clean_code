async function buscarPersonagem(idPersonagem) {
    try {
        const respostaPersonagem = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
        if (!respostaPersonagem.ok) {
            throw new Error(`Erro na requisicao ${respostaPersonagem.status}`);
        }
        const dadosPersonagem = await respostaPersonagem.json();
        console.log(dadosPersonagem);
    } catch (erro) {
        console.error(`Erro ao buscar o personagem ${idPersonagem}`, erro);
    }
}

const buscarIdPersonagem = 1;
buscarPersonagem(buscarIdPersonagem);
