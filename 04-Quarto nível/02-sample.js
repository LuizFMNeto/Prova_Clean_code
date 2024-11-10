async function buscarFilme(idFilme) {
    try {
    const respostaFilme = await fetch(`https://swapi.dev/api/films/${idFilme}/`);
    if (!respostaFilme.ok) {
        throw new Error(`Erro na requisicao: ${respostaFilme.status}`)
    }
    const dadosFilme = await respostaFilme.json();
    console.log(dadosFilme);
    } catch (erro) {
        console.error(`Erro ao buscar filme: ${idFilme}`, erro)
    }

}

const buscarIdFilme = 1;
buscarFilme(buscarIdFilme);
