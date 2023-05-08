const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req , res)=>{
    res.send('Hye i just changed someting #222');
})

app.listen(port, (err)=>{
  console.log('Running on port 3000');
})