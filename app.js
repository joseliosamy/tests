const express = require('express');
const { Server } = require('http');
const app = express();

const PORT = process.env.PORT || 8877;

app.use(express.static("public"))

// HOME
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
//TEST HTML
app.get('/test-html', (req, res)=>{
    res.sendFile(__dirname + '/pages/test-html.html')
})
//CONSUME API
app.get('/consume-api', (req, res)=>{
    res.sendFile(__dirname + '/pages/consume-api.html')
})
//FILTER ERROR 404
app.get('/:erro', (req, res)=>{
    res.sendFile(__dirname + '/pages/error.html')
})

app.listen(PORT, ()=>{
    console.log('escutando a porta:' + PORT)
})
