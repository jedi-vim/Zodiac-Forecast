const express = require("express")
const axios = require("axios").default
const cheerio = require("cheerio")

const app = express()
const port = 9000

const path = require("path")
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../static')))

app.get("/forecast", (req, res)=>{
    const zodiacs = {
        "aries": "",
        "capricornio": "",
        "cancer": "",
        "touro": "",
        "aquario": "",
        "escorpiao": "",
        "gemeos": "",
        "leao": "",
        "peixes": "",
        "sagitario": "",
        "virgem": "",
        "libra": "",
    }
    axios.get(`https://www.uol.com.br/universa/horoscopo/virgem/horoscopo-do-dia/`)
        .then((res)=>{
            if (res.status != 200){
                throw new Error("cant fetch url")
            }
            for (elem in zodiacs){
                const $ = cheerio.load(res.data)
                const forecastMap = JSON.parse($(`.horoscope-info[data-id="${elem}"]`).prop("data-sign"))
                zodiacs[forecastMap["id"]] = forecastMap["resume"]
            }
        }).then(()=>res.send(zodiacs))
})


app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})
