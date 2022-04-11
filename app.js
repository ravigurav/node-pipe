const express  = require('express');
const app = express();

app.get('/api' , async(req,res)=>{
    res.send('welcome to the home page')
})

app.listen(3000);       