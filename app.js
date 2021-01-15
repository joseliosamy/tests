const express = require('express');
const { Server } = require('http');
const app = express();

const PORT = process.env.PORT || 8877;

app.use(express.static("public"))


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/test-html', (req, res)=>{
    res.sendFile(__dirname + '/pages/test-html.html')
})
app.get('/test-css', (req, res)=>{
    res.sendFile(__dirname + '/pages/test-css.html')
})
app.get('/test-js', (req, res)=>{
    res.sendFile(__dirname + '/pages/test-js.html')
})
app.get('/:erro', (req, res)=>{
    res.sendFile(__dirname + '/pages/error.html')
})

app.listen(PORT, ()=>{
    console.log('escutando a porta:' + PORT)
})
