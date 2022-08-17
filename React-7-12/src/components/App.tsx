import { FC, PropsWithChildren, useEffect, useState } from "react"
import NameBox from "./nameBox"
import Nameform from "./nameForm"

interface Props { }

const App: FC<PropsWithChildren<Props>> = (props) => {

  const [firstname, setFirstname] = useState("Dafult")
  const [lastname, setLastname] = useState("Dafult")

  const setName: (firstnameToSave: string, lastnameToSave: string) => void = (f, l) => {
    setFirstname(f)
    setLastname(l)
  }

  return (
    <div>
      <NameBox firstname={firstname} lastname={lastname}>
        <h4>1</h4>
      </NameBox>

      <Nameform setName={setName} />
    </div>
  )
}


export default App