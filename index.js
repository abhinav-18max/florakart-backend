const express = require('express');
const cors = require('cors');
const mongoose =require('cors');
const bodyParser= require('body-parser');
const route =require('./api/routes/route')
const connect =require('./db/db')
const app =express();
const PORT =3000;

 app.use(cors());
 app.use(bodyParser.json());

 app.get('/',(req,res)=>{
     res.status(400).send({
         msg:'sever is up yoyo.....'
     })

 });
 app.use("/api/",route);
connect()

app.listen(PORT, () => {
    console.log('server started , localhost:3000')
})



