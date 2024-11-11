async function buscarEspecie(idEspecie) {
    try {
        const respostaEspecie = await fetch(`https://swapi.dev/api/species/${idEspecie}/`);
        if (!respostaEspecie.ok){
            throw new Error(`Erro na requisicao ${respostaEspecie.status}`);
        }
        const dadosEspecie = await respostaEspecie.json();
        console.log(dadosEspecie); 
    } catch (erro) {
        console.error(`erro em buscar a especie: ${idEspecie}`, erro);
    }
}

const buscarIdEspecie = 1;
buscarEspecie(buscarIdEspecie);
