var express = require('express');

var app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{    
    res.send('welcome to my SpringAPI');
})

app.get('/spring',(req,res)=>{ 
    res.json({  
        name:"spring",
        bestSeason:true
    })
})

app.listen(PORT,function(){ 
    console.log('listening on port' + PORT);
})