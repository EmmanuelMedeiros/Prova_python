import Home from "./Home"
import "./styles/listScreen.css"
import hamburger_menu from "./commons/hamburger_menu.png"

import { Link } from "react-router-dom"
import { useState, useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext.jsx"

import axios from 'axios'

function ListScreen() {

    const {user_data, set_user_data} = useContext(UserContext)
    const [list_data, set_list_data] = useState([])
    const [hamburger, set_hamburger] = useState(true)

    useEffect(() => {

        axios.get(`https://localhost:7281/note/${user_data[0].id}`)
        .then(response => {
        set_list_data(response.data)
    })
    })


    const user_email = user_data[0].email
    return(
        <div className={user_email == undefined ? "null" : "wrapper screen list_container"}>

            <div className="create_menu">
                <img src={hamburger_menu} onClick={() => set_hamburger(false)} alt="" srcset="" id={hamburger ? "" : "null" }/>

                <div className="oppened_menu screen" id={hamburger ? "null" : "appear"}>
                <span class="material-icons" id="close_icon" onClick={() => set_hamburger(true)}>close</span>
                <Link id="link" to={"/create-note"}><button><h2><span>+</span>Criar nota</h2></button></Link>
                </div>
            </div>

            <h1>Bem vindo, <span>{user_email}</span></h1>
            <p id={list_data.length == 0 ? "appear" : "p_dont_appear"}>Você ainda não tem anotações. Começe já a <Link to={"/create-note"}><span>tomar_nota</span></Link></p>

            <div className="notes_container">
            {list_data.map(element => (
                <ul className="my_notes">
                    <li id="list_title">{element.title}</li>
                    <li id="list_content">{element.content.substring(0,18)}</li>
                    <li><p>{element.content.length} chars</p></li>
                </ul>
            ))}
            </div>
        </div>
    )
}

export default ListScreen