// roteadores da aplicacao
const express = require("express")
const usuarioController = require("../controller/usuarioController")
const router = express.Router() // construtor do roteador


router.post("/cadastrar_usuario", usuarioController.cadastrarUsuario)
router.get("/api/usuarios", usuarioController.listarUsuario)

module.exports = router