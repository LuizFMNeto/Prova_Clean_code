function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;
    let salarioComBonus;

    if (cargo === "gerente") { const bonus = 1000;
        salarioComBonus = salarioBase + bonus;
    } else if (cargo === "supervisor") { const bonus = 500;
        salarioComBonus = salarioBase + bonus;
    } else { const bonus = 200;
        salarioComBonus = salarioBase + bonus;
    }
    const descontoDeBonus = 300;
    const salarioComDesconto = salarioComBonus - descontoDeBonus;
    
    let salarioFinal;
    const limiteSalarioMax = 5000;
    const limiteSalarioMedio = 3000;
    if (salarioComDesconto > limiteSalarioMax) {const desconto = 0.27;
        salarioFinal = salarioComDesconto - (salarioComDesconto * desconto);
    } else if (salarioComDesconto > limiteSalarioMedio) { const desconto = 0.18;
        salarioFinal = salarioComDesconto - (salarioComDesconto * desconto);
    } else { const desconto = 0.11;
        salarioFinal = salarioComDesconto - (salarioComDesconto * desconto);
    }
    return salarioFinal;
}

const horasTrabalhadasDoUsuario = 160;
const valorDaHoraDoUsuario = 25;
const salario = calcularSalarioFuncionario(horasTrabalhadasDoUsuario, valorDaHoraDoUsuario, "gerente");
console.log(`O salário final é: ${salario}`);
