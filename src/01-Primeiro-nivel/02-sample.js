const acesso = true;

function verificarAdmin(usuario) {
    if (acesso && usuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const usuario = { nome: "João", admin: true };
verificarAdmin(usuario);
