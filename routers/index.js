const { Router } = require('express')
const axios = require("axios");
const {FetchData} = require('../lib/data')

const router = Router()



router
.get("/",(req,res)=>{
    res.send("Prueba1: Anthony Villarroel")
})
.get("/endopoint1/:params",(req,res)=>{
    const { params: {id} } = req

(async()=>{
    console.log(FetchData.getByPage(id))
})()
})

module.exports.RouterIndex = router