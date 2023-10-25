const Usuario = require('../model/usuario')

function cadastrarUsuario(req, res) {
    let usuario = {
        email: "",
        password: "",
        nome: "",
        data_nascimento: "",
    }
}

module.exports = {
    cadastrarUsuario
}