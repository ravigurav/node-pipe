const express  = require('express');
const app = express();
const port = process.env.PORT || 3000 ;
app.get('/' ,(req,res)=>{
    res.send('updated!')
})

app.listen(port , ()=> console.log('server start on port ' + port));       