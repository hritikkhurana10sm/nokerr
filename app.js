const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req , res)=>{
    res.send('Hye i just changed sometingh #krengea to hoenga 123456789');
})

app.listen(port, (err)=>{
  console.log('Running on port 3000');
})