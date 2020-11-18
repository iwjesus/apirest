const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (requisicao, resposta) => {
  const filmes = [
    { nome: 'Os Vingadores 3' },
    { nome: 'Destacamento Blood' },
    { nome: 'Rambo ' },
    { nome: 'Pantera Negra' }
  ]

  resposta.send(JSON.stringify(filmes))
})

app.listen(4000, () => console.log('API já está funcionando e aceitando requisições!'))