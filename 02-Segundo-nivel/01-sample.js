function calcularDesconto(preco) {
    var desconto = 0.15;
    return preco - (preco * desconto);
}

const precoFinal = calcularDesconto(100);
console.log(`Preço com desconto: ${precoFinal}`);