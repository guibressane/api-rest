
//importando pacotes baixados para nossa api
import 'dotenv/config'
import express from "express"
import cors from "cors" 

const server = express();
server.use(express.json()); // possibilita acrescimo do body na API


server.get('/ola1' , (req, resp) => {
// exemplo de objeto Js, testar com http://localhost:5000/ola
    resp.send({
        mensagem:'Olá mundo',
        numero: 73
    });
}) 

server.get('/ex/:nome' , (req, resp) => {
    // exemplo de uso de parametro de rota, testar com: http://localhost:5000/ex/Guilherme
        resp.send('Olá ' + req.params.nome + ' como vai?' );
}) 

server.get('/ex2' , (req, resp) => {
    // exemplo de uso de parametro de query, testar com: http://localhost:5000/ex2?nome=Guilherme
        resp.send('Olá ' + req.query.nome + ' como vai?' );
}) 

server.post('/ola' , (req, resp) => {
    // exemplo com metodo post http://localhost:5000/ola coloque no body um objeto json com atributo nome
    resp.send('Olá ' + req.body.nome + ' como vai?' );
})

server.get('/somar' , (req, resp) => {

    // exemplo usando query com metodo get http://localhost:5000/somar?n1=3&n2=7

    let a = Number(req.query.n1);
    let b = Number(req.query.n2);
    let x = a + b;

    resp.send({
        mensagem: 'O resultado da soma é ' + x ,
        resultado: x

    })
    
})

server.get('/somar-rota/:n1/:n2' , (req, resp) => {

    // exemplo usando query com metodo get http://localhost:5000/somar/3/7/

    let a = Number(req.params.n1);
    let b = Number(req.params.n2);
    let x = a + b;

    resp.send({
        mensagem: 'O resultado da soma é ' + x ,
        resultado: x

    })
    
})
   
server.post('/maiusculo' , (req, resp) => {
    try {
        let frase = req.body.frase;
        let x = frase.toUpperCase();

        resp.send({
            frase: x
        }) 
    }

    catch (err) {
        resp.status(500).send({
            erro: 'Ocorreu um erro.'
        })
    }

})
    
server.listen(process.env.PORT, () => console.log('API subiu na porta ' + process.env.PORT))