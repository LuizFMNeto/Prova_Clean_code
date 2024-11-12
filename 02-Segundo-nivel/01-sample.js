function calcularDesconto(preco) {
    var desconto = 0.15;
    return preco - (preco * desconto);
}

const valorDoProdutoBruto = 100;
const precoFinal = calcularDesconto(valorDoProdutoBruto);
console.log(`Preço com desconto: ${precoFinal}`);
