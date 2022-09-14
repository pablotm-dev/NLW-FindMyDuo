import express from 'express';

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        {id:1, anuncio:'teste1'},
        {id:2, anuncio:'teste2'},
        {id:3, anuncio:'teste3'},
        {id:4, anuncio:'teste4'}
    ])
})

app.listen(3333)