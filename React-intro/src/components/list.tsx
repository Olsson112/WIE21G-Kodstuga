import ListItem from "./listItem"
import { useState, useEffect, FC } from 'react'
import { User } from "../types"


export default function List(/* Här kan props tas in och då bör ett interface finnas för detta */) {

    // State för users samt funktion för att sätta users
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            name: "Victor",
            age: 30,
            likesBeer: true,
            color: "red"
        }, {
            id: 2,
            name: "Kalle",
            age: 22,
            likesBeer: false,
            color: "green"
        }, {
            id: 3,
            name: "Pelle",
            age: 67,
            likesBeer: false,
            color: "orange"
        }
    ])

    // State för showList samt funktion för att sätta showList
    const [showList, setShowList] = useState<boolean>(false)

    // UseEffect som kommer triggas när komponenten renderats (endast en gång)
    useEffect(() => {
        console.log("effect")
    }, [])

    // Sätter statet showList till dess motsats (true = false || false = true) 
    const toggleList = () => {
        setShowList(!showList)
    }

    // Skapar en kopia av listan users (med ett objekt bortfiltrerat) och updatterar statet
    const removeUser = (userToRemove: User) => {
        const filteredList = users.filter((user) => {
            if(userToRemove.id == user.id) {
                return false
            }
            return true
        })

        // Sätter statet
        setUsers(filteredList)
    }

    console.log("render")

    return (
        <div>
            <button onClick={toggleList}>{ showList ? "Göm listan" : "Visa listan" }</button>
            {
                showList ? (
                    <ol>
                        {
                            users.map((user) => {
                                return <ListItem removeUserProp={removeUser} userProp={user} />
                            })
                        }
                    </ol>
                ) : undefined
            }
            
        </div>
    )
}