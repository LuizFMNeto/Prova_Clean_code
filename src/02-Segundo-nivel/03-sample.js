function calcularFrete(distancia) {
    var taxaDeFrete = 10;
    return distancia * taxaDeFrete;
}

const distanciaDoUsuario = 50;
const frete = calcularFrete(distanciaDoUsuario);
console.log(`O valor do frete é: ${frete}`);
