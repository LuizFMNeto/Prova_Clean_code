const usuarioAtivo = 1;
const contaExistente = 2;
const estoque = 3;
const idUsuario = 42;
const milho = 10;
const cafe = 20;
const cerveja = 30;
const azeite = 40;
const whisky = 50;
const maiorIdade = 18;
function principal() {
    const qntItens = [milho, cafe, cerveja, azeite, whisky];
    let total = 0;
    
    
    for (let i = 0; i < qntItens.length; i++) {
        total += qntItens[i] * estoque;
    }

    const usuario = obterUsuario(idUsuario);
    const checkAtivo = 1;
    const checkConta = 2;

    if (usuarioAtivo === checkAtivo && contaExistente === checkConta && usuario.ativo === checkAtivo) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarDados(usuario);
}

function obterUsuario(id) {
    const idMaria = 43;
    if (id === idUsuario) {
        return {
            id: idUsuario,
            nome: "João Silva",
            idade: 25,
            ativo: 1
        };
    } else if (id === idMaria) {
        return {
            id: 43,
            nome: "Maria Souza",
            idade: 28,
            ativo: 0
        };
    } else {
        console.log("Usuário não encontrado");
        return null;
    }
}

function atualizarDados(usuario) {
    if (usuario !== null && usuario.idade > maiorIdade) {
        console.log("Atualizando usuário:", usuario.id);
        function salvarDados() {
            console.log("Dados salvos com sucesso!");
        }
        salvarDados();

        usuario.idade += 1;
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function calcular(a, b, c) {
    const soma = 1;
    const multiplicador = 2;
    const menos = 3;
    let resultado = 0;
    if (a === soma) {
        resultado = b + c;
    } else if (a === multiplicador) {
        resultado = b * c;
    } else if (a === menos) {
        resultado = b - c;
    } else {
        resultado = b / c;
    }
    return reverterValor(resultado.toString());

}
function reverterValor(valor){  
    const reverso = valor.toString().split("").reverse().join("");
    console.log("String invertida:", reverso);
    return reverso;
}

function processarDados(n) {
    let resultado = 0;
    const checkPar = 2;
    for (let i = 1; i <= n; i++) {
        if (i % checkPar === 0) {
            resultado += i;
        } else {
            resultado -= i;
        }
    }
    console.log("Resultado do processamento:", resultado);

    function exibirDados() {
        const dados = ["Valor 1", "Valor 2", "Valor 3"];
        for (let i = 0; i < dados.length; i++) {
            console.log("Dados:", dados[i]);
        }
    }
    exibirDados();

    return resultado;
}

function funcao() {
    const item1 = 5;
    const item2 = 7;
    const item3 = 9;
    const item4 = 11;
    const multiplicador = 3;
    const itens = [item1, item2, item3, item4];
    let x = 0;
    for (let i = 0; i < itens.length; i++) {
        x += itens[i] * multiplicador;
    }

    function mostrarInfo() {
        const valores = ["Dado 1", "Dado 2", "Dado 3"];
        for (let j = 0; j < valores.length; j++) {
            console.log("Info:", valores[j]);
        }
    }

    mostrarInfo();
    console.log("Cálculo total:", x);
    return x;
}
const calculoNum1 = 1;
const calculoNum2 = 2;
const calculoNum3 = 3;
const calculo = [calculoNum1,calculoNum2,calculoNum3];
const processo = 10;
principal();
console.log("Resultado do cálculo:", calcular(calculo));
console.log("Resultado do processamento de dados:", processarDados(processo));
console.log("Resultado da função:", funcao());
