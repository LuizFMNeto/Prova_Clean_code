async function buscarNave(idNave) {
    try {
    const respostaNave = await fetch(`https://swapi.dev/api/starships/${idNave}/`);
    if (!respostaNave.ok) {
        throw new Error(`Erro na requisição: ${respostaNave.status}`);
    }
    const dadosNave = await respostaNave.json();
    console.log(dadosNave)
    } catch (erro) {
        console.error(`Erro ao buscar dados da nave ${idNave}:`, erro);
    }
}


const buscarIDNave = 2;
buscarNave(buscarIDNave);
