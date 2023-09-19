const express = require("express")
const app = express()
const port = 9000

const path = require("path")
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../static')))

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})