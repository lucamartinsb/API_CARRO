require('dotenv').config({path:'variaveis.env'}) // chamando dotenv para conseguir ler o arquivo de variáveis de ambiente
const express = require('express') // chamando o express  
const cors = require('cors') // especificação da W3C para poder trabalhar com API's
const bodyParser = require('body-parser') // módulo capaz de converter o body de uma requisição para vários outros formatos
const routes = require('./routes') // chamando o routers

const server = express()
server.use(cors())
server.use(bodyParser.urlencoded({extended: false}))

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na url http://localhost:${process.env.PORT}`)
})