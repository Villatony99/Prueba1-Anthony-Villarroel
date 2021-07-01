const { Router } = require('express')
const { FetchData } = require('../lib/data')

const router = Router()

router
    .get("/", (req, res) => {
        res.send("Prueba1: Anthony Villarroel")
    })
    .get("/endpoint1/:id", async (req, res) => {
        try {
            const { params: { id } } = req
            const param = await FetchData.getCharacter(id)
            res.json({
                tema: `Datos del persona ${id}`,
                body: param
            })
        } catch (error) {
            res.status(500).json(error)
        }
    })
    .get("/endpoint2", async (req, res) => {
        try {
            const { query } = req
            //console.log(query.id)
            const param = await FetchData.getSpecificCharacters(5,6)
            console.log(param)
            res.json({
                tema: `Datos del persona ${id}`,
                body: param
            })
        } catch (error) {
            res.status(500).json(error)
        }
    })

module.exports.RouterIndex = router