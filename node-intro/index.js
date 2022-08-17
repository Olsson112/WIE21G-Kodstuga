import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = 3000

app.use("/", express.static("client"))

let name = ""

app.get("/api/external", async (req, res) => {
    const response = await fetch("https://api.agify.io/?name=bella")
    const data = await response.json()
    res.json(data)
})
 
app.get("/api/test", (req, res) => {
    console.log("TEEEEST")
    res.send("TEST")
})

app.get("/api/:greeting", (req, res) => {
    res.send(`${req.params.greeting + " " + name}`)
})

app.get("/api/name/:name", (req, res) => {
    name = req.params.name
    res.send("Sparat!")
})


app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})