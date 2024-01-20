const { urlencoded } = require('express');
const express=require('express');
const firebase=require('./firebase');

const app=express();

let port = process.env.PORT || "0.0.0.0";

app.use(express.urlencoded({extended:true}));

app.listen(4000, port, () => {
    console.log(`Server started listening at ${port}.`);
});

app.get('/events',(req,res) => {
    firebase.getEvents().then((str)=>{
        res.send(str);
    })
});

app.get('/sponsors',(req,res)=>{  
    firebase.getSponsors().then((str)=>{
        res.send(str);
    })
})

