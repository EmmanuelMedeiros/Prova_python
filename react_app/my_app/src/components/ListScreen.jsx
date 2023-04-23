import Home from "./Home"
import "./styles/listScreen.css"

import { useState, useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext.jsx"

import axios from 'axios'

function ListScreen() {

    const {user_data, set_user_data} = useContext(UserContext)
    const [list_data, set_list_data] = useState([])

    useEffect(() => {

        axios.get(`https://localhost:7281/note/${user_data[0].id}`)
        .then(response => {
        set_list_data(response.data)
    })
    })

    const user_email = user_data[0].email
    console.log(user_email)
    return(
        <div className={user_email == undefined ? "null" : "wrapper screen list_container"}>

            <h1>Bem vindo, <span>{user_email}</span></h1>
            <p id={list_data.length == 0 ? "appear" : "p_dont_appear"}>Você ainda não tem anotações. Começe já a <span>tomar_nota</span></p>

            {list_data.map(element => (
                <ul className="my_notes">
                    <li id="list_title">{element.title}</li>
                    <li id="list_content">{element.content.substring(0,30)}</li>
                    <li><p>{element.content.length} chars</p></li>
                </ul>
            ))}
        </div>
    )
}

export default ListScreen