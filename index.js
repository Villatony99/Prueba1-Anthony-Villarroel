const express =require('express');


//generar aplicacion express
const app = express()


const {RouterIndex}=require('./routers/index')

app.use("/", RouterIndex);

app.listen(3000,()=>{
    console.log("Servidor escuchando http://localhost:3000")
})