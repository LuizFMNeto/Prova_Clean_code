function pegarNumerosParesDeVetor(vetorParametro) {
    const vetor = [];
    const paramNumeroPar = 2;
    for (let indice = 0; indice < vetorParametro.length; indice++) {
        if (vetorParametro[indice] % paramNumeroPar === 0) {
            vetor.push(vetorParametro[indice]);
        }
    }
    return vetor;
}

function criarVetor(){
    const vetorExemplo = [];
    const maxVetor = 6;
    let indice = 1;
    while(vetorExemplo.length <= maxVetor){
        vetorExemplo[indice - 1] = indice;
        indice++;
    }
    return vetorExemplo;
}

const vetorNumerosPares = pegarNumerosParesDeVetor(criarVetor());
console.log(vetorNumerosPares);
