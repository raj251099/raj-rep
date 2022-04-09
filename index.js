const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config()
const productRouter = require('./myroutes/my.routes');

const index = express();
index.use(cors());
const port = process.env.PORT || 8080;

index.get("/healthCheck", async(req,res)=>{
    console.log("working condition");
    res.send({status: 'Success'})
})
mongoose.connect(process.env.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(data=>{
    console.log("Db connection success")
}).catch(err=>{
    console.log(err.message)
    process.exit(1)
})
index.use(express.json());
index.use('/api/v1/product/', productRouter);
index.listen(port, ()=>{
    console.log("server starting..at 8061 port")
    console.log(`http://127.0.0.1:${port}`)
});