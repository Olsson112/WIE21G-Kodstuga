import express from "express"
import { nanoid } from "nanoid"
import cors from "cors"

const app = express()
const port = 3000

let cities = [
    {
        id: nanoid(),
        name: "Göteborg",
        population: 600000
    }, {
        id: nanoid(),
        name: "Malmö",
        population: 450000
    }, {
        id: nanoid(),
        name: "Laholm",
        population: 25000
    }
]

let visitors = 0

app.use(express.json())
app.use("/", express.static("client"))

app.use(cors())

app.all("*", (req, res, next) => {
    visitors++
    req.visitors = visitors
    next()
})

const logVisitors = (req, res, next) => {
    console.log(req.visitors)
    next()
}

app.get("/cities", logVisitors, (req, res) => {
    try {
        res.json(cities)
    } catch(err) {
        res.status(500).json(err.message)
    }
})

app.get("/cities/:id", (req, res) => {
    try {
        const foundCity = cities.find((city) => {
            if(city.id == req.params.id) {
                return true
            }
        })

        if(!foundCity) {
            throw new Error("Id does not exists...")
        }

        res.json(foundCity)
    } catch(err) {
        res.status(404).json(err.message)
    }
})

app.post("/cities", (req, res) => {

    try {
        if(!req.body || (!req.body.name || !req.body.population)) {
            throw new Error("Data was not provided correctly...")
        }
        
        const cityExists = cities.find(city => city.name == req.body.name)
        
        if(cityExists) {
            throw new Error("City already exists")
        }
    
        let newCity = req.body
        newCity.id = nanoid()

        cities.push(newCity)
    
        res.json("New city added!")
    } catch(err) {
        res.status(400).json(err.message)
    }
    
})

app.delete("/cities/:id", (req, res) => {
    try {

        // Alternativt sätt att ta bort ut listan 
        /* 
        const filteredList = cities.filter(city => city.id != req.params.id)

        if(filteredList.length == cities.length) {
            throw new Error("Id does not exists...")
        }

        cities = filteredList
        */

        const indexToRemove = cities.findIndex(city => city.id == req.params.id)

        if(indexToRemove == -1) {
            throw new Error("Id does not exists...")
        }

        const nameFromRemoved = cities[indexToRemove].name

        cities.splice(indexToRemove, 1)

        res.json(`City with name ${nameFromRemoved} removed!`)

    } catch(err) {
        res.status(404).json(err.message)
    }
})

app.put("/cities", (req, res) => {
    try {

        if(!req.body || (!req.body.id || !req.body.name || !req.body.population)) {
            throw new Error("Data was not provided correctly...")
        }
        
        const indexToUpdate = cities.findIndex(city => city.id == req.body.id)

        if(indexToUpdate == -1) {
            throw new Error("Id does not exists...")
        }

        const nameBeforeUpdate = cities[indexToUpdate].name

        cities[indexToUpdate] = req.body

        res.json(`City with old name ${nameBeforeUpdate} has been updated to  ${cities[indexToUpdate].name}!`)
    } catch(err) {
        res.status(404).json(err.message)
    }
})

app.listen(port, () => {
    console.log("App is running on port " + port);
})
