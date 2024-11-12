class Usuario {
    constructor (nome, idade, tipoDeUsuario) {
        this.nome = nome;
        this.idade = idade;
        this.tipoDeUsuario = tipoDeUsuario;
    }

    serAdimin() {
        if (this.tipoDeUsuario === "admin") {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

class InfoUsuario {
    constructor (dataCriacao, ultimoLogin, usuarioAtivo, tentativasDeLogin){
        this.dataCriacao = dataCriacao;
        this.ultimoLogin = ultimoLogin;
        this.usuarioAtivo = usuarioAtivo;
        this.tentativasDeLogin = tentativasDeLogin;
    }

    estaAtivo() {
        if (this.usuarioAtivo) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }
}

function quantosAdmin(usuarios) {
    let usuariosAdmin = 0;
    for (let indice = 0; indice < usuarios.length; indice++) {
        if (usuarios[indice].tipoDeUsuario === "admin") {
            usuariosAdmin++;
        }
    }
    return usuariosAdmin;
}

function tentativaDeLogin(qualUsuario, tentativas) {
    if (qualUsuario.tentativasDeLogin > tentativas) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

function usuarioLoginMaisRecente(usuario1, usuario2) {
    if (usuario1.ultimoLogin > usuario2.ultimoLogin) {
        return `${usuario1.nome} logou mais recentemente.`;
    } else {
        return `${usuario2.nome} logou mais recentemente.`;
    }
}

function usuarioRecente(usuarioParam) {
    const dataAtual = new Date();
    const param = 31536000000;
    if (dataAtual - usuarioParam.dataCriacao < param) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

const idade1 = 25; const idade2 = 30; const idade3 = 29; const idade4 = 35;

const login1 = 2; const login2 = 3; const login3 = 5; const login4 = 7;

const ano1 = 2023; const ano2 = 2020; const ano3 = 2022; const ano4 = 2021;
const ano5 = 2024; const ano6 = 2024; const ano7 = 2024; const ano8 = 2023;

const mes1 = 1; const mes2 = 4; const mes3 = 10; const mes4 = 2;
const mes5 = 8; const mes6 = 7; const mes7 = 6; const mes8 = 12;

const dia1 = 15; const dia2 = 22; const dia3 = 5; const dia4 = 10;
const dia5 = 1; const dia6 = 31; const dia7 = 10; const dia8 = 25;

const usuarios = [
    new Usuario("Carlos", idade1, "admin"),
    new Usuario("Ana", idade2, "guest"),
    new Usuario("José", idade3, "admin"),
    new Usuario("Maria", idade4, "guest")
];
const infoUsuarios = [
    new InfoUsuario(new Date(ano1, mes1, dia1), new Date(ano5, mes5, dia5), true, login1),
    new InfoUsuario(new Date(ano2, mes2, dia2), new Date(ano6, mes6, dia6), true, login2),
    new InfoUsuario(new Date(ano3, mes3, dia3), new Date(ano7, mes7, dia7), false, login3),
    new InfoUsuario(new Date(ano4, mes4, dia4), new Date(ano8, mes8, dia8), false, login4)
];

console.log(`Usuários admin: ${quantosAdmin(usuarios)}`);

var indice = 0;
infoUsuarios[indice].estaAtivo();
indice++;
usuarios[indice].serAdimin();

const usuarioExemplo1 = 2;
const tentativasDoUsuario  = 4;
tentativaDeLogin(infoUsuarios[usuarioExemplo1], tentativasDoUsuario);

const exemple1 = 0;
const example2 = 3;
console.log(usuarioLoginMaisRecente(infoUsuarios[exemple1], infoUsuarios[example2]));

const usuarioExemplo2 = 3;
usuarioRecente(infoUsuarios[usuarioExemplo2]);
