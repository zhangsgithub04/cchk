const express = require ('express');
const app=express();

const port= 3456;
app.use(express.json());

app.get('/', (req,res) =>{
 res.send('hello World!');
});

app.listen(port, () =>{
 console.log(`Example app listening on port ${port}!`);
});


