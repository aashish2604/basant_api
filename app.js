const { urlencoded } = require('express');
const express=require('express');
const firebase=require('./firebase');

const app=express();

let port = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));

app.listen(port, "0.0.0.0", () => {
    console.log(`Server started listening at ${port}.`);
});

app.get('/events',(req,res) => {
    console.log("hitting request");
    firebase.getEvents().then((str)=>{
        console.log("done");
        res.send("success");
    })
});

app.get('/sponsors',(req,res)=>{  
    firebase.getSponsors().then((str)=>{
        res.send(str);
    })
});

app.get('/',(req,res)=>{
    res.send("server is healthy");
})

