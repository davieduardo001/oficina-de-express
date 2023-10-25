const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const db = require('./src/db')

// se cria a aplicacao (app vai receber as funcionalidades q a lib express tem)
const app = express()

// importa a lib para a criacao front e comunicacao com o express
app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/src/views')

// configuracao para o parser entre requisicoes e funcoes dentro da web
app.use(express.urlencoded({extended: true}))
app.use(express.json());
// cria uma pasta publica, se separando a pasta publica do codigo fonte, por seguranca
app.use(express.static(__dirname + '/public'));

// cria uma sessao de usuario (cookies <3)
app.use(session({
    secret: 'secret-token',
    name: 'sessionId',  
    resave: false,
    saveUninitialized: false
}))

// Define as rotas da aplicação (declaradas na pasta /src/routes/)
// requisicao get rendenizando o arquivo index.html
app.use('/', require('./src/routes/anotacaoRoutes'))
app.use('/', require('./src/routes/usuarioRoutes'))

db.sync(() => console.log("database conectado"))

const app_port = 8080
app.listen(app_port, function () {
    console.log('app rodando na porta ' + app_port)
})
