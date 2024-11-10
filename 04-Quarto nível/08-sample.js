async function buscarPlanetaRecursivo(idPlaneta) {
    try {
    const respostaPlaneta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
    if (!respostaPlaneta.ok) {
        throw new Error(`Erro na requisicao: ${respostaPlaneta.status}`)
    }
    const dadosPlanetas = await respostaPlaneta.json();
    console.log(dadosPlanetas.name);
    buscarPlanetaRecursivo(idPlaneta + 1);
    } catch(erro){
        console.error(`Erro ao buscar planeta: ${idPlaneta}`, erro)
    }
}

const buscarIdPlaneta = 1;
buscarPlanetaRecursivo(buscarIdPlaneta);
