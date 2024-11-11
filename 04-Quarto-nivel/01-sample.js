async function buscarPlaneta(idPlaneta) {
    try {
        const respostaPlaneta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
        if (!respostaPlaneta.ok) {
            throw new Error(`Erro na requisicao: ${respostaPlaneta.status}`);
        }
        const dadosPlaneta = await respostaPlaneta.json();
        console.log(dadosPlaneta);
    } catch(erro) {
        console.error(`Erro ao buscar o planeta: ${idPlaneta}`, erro);
    }

}

const buscarIdPlaneta = 1;
buscarPlaneta(buscarIdPlaneta);
