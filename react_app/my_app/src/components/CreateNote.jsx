import "./styles/createNote.css"

import { useEffect, useState } from "react"

function CreateNote() {

    const [letters, set_letters] = useState("")

    useEffect(() => {
        console.log(letters)
    })

    return(
        <div className="wrapper screen create_container">
            <h1>Nova nota</h1>

            <form className="inserts">
                <li id="insert_title"><input type="text" name="" placeholder="Título aqui" id="" /></li>
                <p id={letters == "" ? "not_appear" : ""}>{-letters.length + 140}</p>
                <li id="insert_content"><textarea type="text" name="" onChange={(event) => set_letters(event.target.value)} placeholder="Nova nota (até 140 caracteres)"  id="dd" /></li>
            </form>
        </div>
    )
}

export default CreateNote