import React from "react";
import { FC, PropsWithChildren } from "react";

interface Props {
    firstname: string
    lastname: string
}

const NameBox: FC<PropsWithChildren<Props>> = (props) => {
    const textElement: JSX.Element = <h1 style={textStyle}>{props.firstname + " " + props.lastname}</h1>

    return (
        <>
            <div style={{...boxStyle, backgroundColor: "red"}}>
                {textElement}
            </div>
            {props.children}
        </>
    )
}


const boxStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "10em",
    height: "10em",
    border: "10px solid black"
}

const textStyle: React.CSSProperties = {
    textAlign: "center"
}


export default NameBox