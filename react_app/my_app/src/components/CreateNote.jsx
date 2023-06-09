import "./styles/createNote.css"

import { useNavigate } from "react-router-dom"

import { useContext, useEffect, useState } from "react"
import {useForm} from "react-hook-form"
import axios from "axios"
import { UserContext } from "../context/UserContext"

function CreateNote() {

    const navigate = useNavigate()

    const [letters, set_letters] = useState("")
    const {register, handleSubmit, watch} = useForm()
    const {user_data, set_user_data} = useContext(UserContext)

    useEffect(() => {
        set_letters(watch("content"))
    })

    const create_note = data => axios.post(`https://localhost:7281/note/${user_data[0].id}`, data)
    .then(() => {
        console.log("deu certo")
        navigate("/todo-list")
    })

    return(
        <div className="wrapper screen create_container">
            <h1>Nova nota</h1>

            <form className="inserts" onSubmit={handleSubmit(create_note)}>
                <li id="insert_title"><input type="text" name="title" placeholder="Título aqui" id="" maxLength={20} minLength={5} {...register("title")}/></li>
                <p id={letters == "" ? "not_appear" : ""}>{-letters.length + 140}</p>
                <li id="insert_content"><textarea type="text" name="content" placeholder="Nova nota (até 140 caracteres)"  {...register("content")}/></li>
                <button id={letters.length > 140 ? "not_appear" : ""} type="submit">Criar</button>
                <p id={letters.length > 140 ? "limit" : "not_appear"}>Ultrapassou o limite de caracteres</p>
            </form>
        </div>
    )
}

export default CreateNote