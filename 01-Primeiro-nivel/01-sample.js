function pegarNumerosParesDeVetor(vetorParametro) {
    const vetor = [];
    for (let indice = 0; indice < vetorParametro.length; indice++) {
        if (vetorParametro[indice] % 2 === 0) {
            vetor.push(vetorParametro[indice]);
        }
    }
    return vetor;
}

const vetorExemplo = [1, 2, 3, 4, 5, 6];
const vetorNumerosPares = pegarNumerosParesDeVetor(vetorExemplo);
console.log(vetorNumerosPares);
