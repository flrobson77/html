const exprss = require('express')
const app = exprss()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded ({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    console.log(req.params.nome)
    resp.send('<h1> Parabens!!!</h1>')
    }
)

app.listen(3003)