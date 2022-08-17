import { FC, useEffect, useState } from "react"

interface Props {
    setName: (firstnameToSave: string, lastnameToSave: string) => void
}

const Nameform: FC<Props> = (props) => {

    const [firstnameInput, setFirstnameInput] = useState("")
    const [lastnameInput, setLastnameInput] = useState("")

    useEffect(() => {
        console.log(firstnameInput)
        console.log(lastnameInput)
    }, [firstnameInput, lastnameInput])

    return(
        <div style={nameForm}>
            <input type="text" onChange={(event) => { setFirstnameInput(event.target.value) }} value={firstnameInput} placeholder="Förnamn" />
            <input type="text" onChange={(event) => { setLastnameInput(event.target.value) }} value={lastnameInput} placeholder="Efternamn" />
            <button onClick={() => { props.setName(firstnameInput, lastnameInput) }}>Spara</button>
        </div>
    )
}


const nameForm: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "2em",
    width: "20em"
}

export default Nameform