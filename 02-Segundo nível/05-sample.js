function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;
    
    let salarioComBonus;
    var bonus = 0;
    if (cargo === 'gerente') {
        bonus = 1000;
        salarioComBonus = salarioBase + bonus;
    } else if (cargo === 'supervisor') {
        bonus = 500;
        salarioComBonus = salarioBase + bonus;
    } else {
        bonus = 200;
        salarioComBonus = salarioBase + bonus;
    }

    const descontoDeBonus = 300;
    const salarioComDesconto = salarioComBonus - descontoDeBonus;

    let salarioFinal;
    var desconto = 0;
    const limiteSalarioMax = 5000;
    const limiteSalarioMedio = 3000;
    if (salarioComDesconto > limiteSalarioMax) {
        desconto = 0.27;
        salarioFinal = salarioComDesconto - (salarioComDesconto * desconto);
    } else if (salarioComDesconto > limiteSalarioMedio) {
        desconto = 0.18;
        salarioFinal = salarioComDesconto - (salarioComDesconto * desconto);
    } else {
        desconto = 0.11;
        salarioFinal = salarioComDesconto - (salarioComDesconto * desconto);
    }

    return salarioFinal;
}

const salario = calcularSalarioFuncionario(160, 25, 'gerente');
console.log(`O salário final é: ${salario}`);
