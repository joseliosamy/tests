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
    res.sendFile(__dirname + '/src/pages/test-html.html')
})
//CONSUME API
app.get('/consume-api', (req, res)=>{
    res.sendFile(__dirname + '/src/pages/consume-api.html')
})
//API BASICA
app.get('/api', (req, res)=>{
    res.json([
        {
            title:"Cachorros silvestres",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis risus tortor, vel finibus justo iaculis et. Donec sit amet laoreet velit, ut bibendum enim. Morbi nec erat nec lorem convallis maximus non nec enim. Phasellus pellentesque ex ut posuere vehicula. Phasellus facilisis efficitur lorem, at ultricies orci sagittis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales accumsan est, sit amet consequat ex blandit non.",
            linkContent: {
                link:"https://www.lipsum.com/feed/html",
                name:"Ipsum"
            }
        },
        {
            title:"Gatos silvestres",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis risus tortor, vel finibus justo iaculis et. Donec sit amet laoreet velit, ut bibendum enim. Morbi nec erat nec lorem convallis maximus non nec enim. Phasellus pellentesque ex ut posuere vehicula. Phasellus facilisis efficitur lorem, at ultricies orci sagittis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales accumsan est, sit amet consequat ex blandit non.",
            linkContent: {
                link:"https://www.lipsum.com/feed/html",
                name:"Erison"
            }
        },
        {
            title:"Coelhos da Mata",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis risus tortor, vel finibus justo iaculis et. Donec sit amet laoreet velit, ut bibendum enim. Morbi nec erat nec lorem convallis maximus non nec enim. Phasellus pellentesque ex ut posuere vehicula. Phasellus facilisis efficitur lorem, at ultricies orci sagittis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales accumsan est, sit amet consequat ex blandit non.",
            linkContent: {
                link:"https://www.lipsum.com/feed/html",
                name:"Ford"
            }
        },
        {
            title:"Lulas Assassinas",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis risus tortor, vel finibus justo iaculis et. Donec sit amet laoreet velit, ut bibendum enim. Morbi nec erat nec lorem convallis maximus non nec enim. Phasellus pellentesque ex ut posuere vehicula. Phasellus facilisis efficitur lorem, at ultricies orci sagittis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales accumsan est, sit amet consequat ex blandit non.",
            linkContent: {
                link:"https://www.lipsum.com/feed/html",
                name:"Konm"
            }
        }
    ])
})
//FILTER ERROR 404
app.get('/:erro', (req, res)=>{
    res.sendFile(__dirname + '/src/pages/error.html')
})
app.listen(PORT, ()=>{
    console.log('escutando a porta:' + PORT)
})
