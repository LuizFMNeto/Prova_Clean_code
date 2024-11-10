class Usuario {
    constructor(nome, idade, tipoDeUsuario, dataCriacao, ultimoLogin, usuarioAtivo, tentativasDeLogin) {
        this.nome = nome;
        this.idade = idade;
        this.tipoDeUsuario = tipoDeUsuario;
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

    serAdimin() {
        if (this.tipoDeUsuario === "admin") {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

function quantosAdmin(usuarios) {
    const usuariosAdmin = 0;
    for (let indice = 0; indice < usuarios.length; indice++) {
        if (usuarios[indice].usuariosAdimin === "admin") {
            usuariosAdimin++;
        }
    }
    return usuariosAdimin;
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
        return usuario1.nome + " logou mais recentemente.";
    } else {
        return usuario2.nome + " logou mais recentemente.";
    }
}

function usuarioRecente(usuarioParam) {
    const dataAtual = new Date();
    if (dataAtual - usuarioParam.dataCriacao < 31536000000) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

const usuarios = [
    new Usuario("Carlos", 25, "admin", new Date(2023, 1, 15), new Date(2024, 8, 1), true, 2),
    new Usuario("Ana", 30, "guest", new Date(2020, 4, 22), new Date(2024, 7, 31), true, 3),
    new Usuario("José", 29, "admin", new Date(2022, 10, 5), new Date(2024, 6, 10), false, 5),
    new Usuario("Maria", 35, "guest", new Date(2021, 2, 10), new Date(2023, 12, 25), false, 7)
];

console.log("Usuários admin: " + quantosAdmin(usuarios));

usuarios[0].estaAtivo();
usuarios[1].serAdimin();

tentativaDeLogin(usuarios[2], 4);

console.log(usuarioLoginMaisRecente(usuarios[0], usuarios[3]));

usuarioRecente(usuarios[3]);
