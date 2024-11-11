function calcularFrete(distancia) {
    var taxaDeFrete = 10;
    return distancia * taxaDeFrete;
}

const frete = calcularFrete(50);
console.log(`O valor do frete é: ${frete}`);
