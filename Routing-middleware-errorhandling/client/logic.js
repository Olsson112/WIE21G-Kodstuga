const collectAdmins = async (event) => {
    try {

        fetch("http://localhost:3000/admin").then((response) => {
            return response.json()
        }).then((body) => {
            console.log(body)
        }).catch((err) => {
            throw err
        })

        /* const response = await fetch("http://localhost:3000/admin")
        const body = await response.json()
        console.log(body) */
    } catch(err) {
        console.error(err)
    }
}

const addNewAdmin = async (event) => {
    try {

        const adminToAdd = {
            name: "Johan", 
            age: 36
        }

        const response = await fetch("http://localhost:3000/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adminToAdd)
        })
        const body = await response.json()
        console.log(body)
    } catch(err) {

    }
}

document.getElementById("collectBtn").addEventListener("click", collectAdmins)
document.getElementById("createBtn").addEventListener("click", addNewAdmin)