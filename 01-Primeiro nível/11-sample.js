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
        if (this.tipoDeUsuario === 'admin') {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

// Deixe nome função clara para que seja possível de compreender que ela verifica o número de usuários com nome role de admin
function quantosAdmin(usuarios) {
    let usuariosAdmin = 0;
    for (let indice = 0; indice < usuarios.length; indice++) {
        if (usuarios[indice].usuariosAdimin === 'admin') {
            usuariosAdimin++;
        }
    }
    return usuariosAdimin;
}

// Deixe nome função clara para que seja possível de compreender que ela verifica se o número de tentativas de login é excessivo
function tentativaDeLogin(qualUsuario, tentativas) {
    if (qualUsuario.tentativasDeLogin > tentativas) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

// Deixe nome função clara para que seja possível de compreender que ela verifica qual usuário logou mais recentemente
function usuarioLoginMaisRecente(usuario1, usuario2) {
    if (usuario1.ultimoLogin > usuario2.ultimoLogin) {
        return usuario1.nome + " logou mais recentemente.";
    } else {
        return usuario2.nome + " logou mais recentemente.";
    }
}

// Deixe nome função clara para que seja possível de compreender que ela verifica se o usuário foi criado recentemente
function usuarioRecente(usuarioParam) {
    let dataAtual = new Date();
    if (dataAtual - usuarioParam.dataCriacao < 31536000000) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

let usuarios = [
    new Usuario("Carlos", 25, 'admin', new Date(2023, 1, 15), new Date(2024, 8, 1), true, 2),
    new Usuario("Ana", 30, 'guest', new Date(2020, 4, 22), new Date(2024, 7, 31), true, 3),
    new Usuario("José", 29, 'admin', new Date(2022, 10, 5), new Date(2024, 6, 10), false, 5),
    new Usuario("Maria", 35, 'guest', new Date(2021, 2, 10), new Date(2023, 12, 25), false, 7)
];

console.log("Usuários admin: " + quantosAdmin(usuarios));

usuarios[0].estaAtivo();
usuarios[1].serAdimin();

tentativaDeLogin(usuarios[2], 4);

console.log(usuarioLoginMaisRecente(usuarios[0], usuarios[3]));

usuarioRecente(usuarios[3]);