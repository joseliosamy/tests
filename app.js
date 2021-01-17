const express = require('express');
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 8877;

app.use(express.static("public"));
//midleware
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});

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
//API BASICA
app.get('/api', (req, res)=>{
    res.json([
        {
            name:"Josélio",
            age:"20"
        },
        {
            name:"jota",
            age:"22"
        }
    ])
})
//FILTER ERROR 404
app.get('/:erro', (req, res)=>{
    res.sendFile(__dirname + '/pages/error.html')
})
app.listen(PORT, ()=>{
    console.log('escutando a porta:' + PORT)
})
