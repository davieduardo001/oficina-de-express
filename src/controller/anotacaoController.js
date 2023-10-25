// toda funcao q atende uma rota recebe requisicao e resposta
function indexView(req, res) {
    res.render('index.html')
}

function homeView(req, res) {
    res.render('home.html')
}

module.exports = {
    indexView,
    homeView
}