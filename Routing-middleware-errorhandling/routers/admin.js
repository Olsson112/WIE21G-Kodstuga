import express from "express"
import { nanoid } from "nanoid"

export const router = express.Router()

const loggedIn = true

const admins = [
    {
        id: nanoid(),
        name: "Kalle",
        age: 44
    }
]

const authenticator = (req, res, next) => {
    if(loggedIn) {
        next()
        return
    }

    throw new Error("Du är inte inloggad...")
}

router.get("/", [authenticator], (req, res) => {
    res.json(admins)
})

router.post("/", (req, res) => {
    console.log(req.body)
    if(!req.body || !req.body.name || !req.body.age) {
        throw new Error("Body is not set correctly...")
    }

    // Alternativt sätt att skapa en admin och lägga till denna i listan
    /* 
    let adminToAdd = req.body
    adminToAdd.id = nanoid()
    admins.push(adminToAdd) 
    */

    admins.push({...req.body, ...{id: nanoid()}})
    res.json({status: "New admin added!"})
})

router.use((err, req, res, next) => {
    console.log(err.status)
    console.log(err.message)
    res.status(500).json(err)
})