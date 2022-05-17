import { User } from "../types"


// Interface för hur props-objektet för denna komponent ser ut
interface Props {
    userProp: User
    removeUserProp: (user: User) => void
}

export default function ListItem(props: Props) {
    return (
        <li>
            <div style={styleObject(props)}>
                <h2>{props.userProp.name}</h2>
                <h2>{props.userProp.age}</h2>
                <h2>{props.userProp.likesBeer ? "Gillar öl" : "Gillar inte öl"}</h2>
                <button onClick={(e) => { props.removeUserProp(props.userProp) }}>Ta bort</button>
            </div>
        </li> 
    )
}

// Funktion som tar in props som en parameter och returnerar ett styleobjekt
const styleObject: (props: Props) => React.CSSProperties = (props) => {
    return {
        backgroundColor: props.userProp.color
    }
}