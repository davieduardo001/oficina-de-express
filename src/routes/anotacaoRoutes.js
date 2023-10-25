// roteadores da aplicacao
const express = require("express")

// chamando o controller
const anotacaoController = require("../controller/anotacaoController")

const router = express.Router() // construtor do roteador

// importando controlers

router.get("/", anotacaoController.indexView)
router.get("/home", anotacaoController.homeView)

module.exports = router