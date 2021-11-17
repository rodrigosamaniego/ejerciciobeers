//1 importaciones
const express = require("express")

const app = express()
const hbs = require("hbs")
require("dotenv").config()

// 2. Middleware
app.use(express.static('public'))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

// 3 rutas
app.get("/", (req, res) =>{
    res.render("index")
})
// 4 servidor
app.listen(process.env.PORT, () =>{
    console.log(`Servidor activo en puerto ${process.env.PORT}`)
    })