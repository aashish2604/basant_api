const { urlencoded } = require('express');
const express=require('express');
const firebase=require('./firebase');

const app=express();

app.use(express.urlencoded({extended:true}));

app.listen(4000, "0.0.0.0", () => {
    console.log(`Server started listening at 4000.`);
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

