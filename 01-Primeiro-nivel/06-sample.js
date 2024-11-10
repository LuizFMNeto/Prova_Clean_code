const nomeUsuario = "Pedro";
const idadeUsuario = 25;
const usuarioAtivo = true;

function verificarUsuarioAtivo(nomeUsuario, idadeUsuario, usuarioAtivo) {
    if (usuarioAtivo) {
        console.log(nomeUsuario + " tem " + idadeUsuario + " anos e está ativo.");
    } else {
        console.log(nomeUsuario + " está inativo.");
    }
}

verificarUsuarioAtivo(nomeUsuario, idadeUsuario, usuarioAtivo);
