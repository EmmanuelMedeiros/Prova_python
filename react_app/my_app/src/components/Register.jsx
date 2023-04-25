import { useEffect, useState } from "react"
import "./styles/register.css"
import { Link, useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"

import axios from "axios"

function Register() {

    const { register, handleSubmit, watch, formState: {errors} } = useForm();

    const navigate = useNavigate()
    
    const addPost = data => axios.post("https://localhost:7281/person", data)
    .then(() => {
        navigate("/")
    }).catch(error => {
        console.log(error)
    }) 


    const [infos, set_infos] = useState({
        email_value: "",
        pwd_value: ""
    })


    const emailChangeHandler = (event) => {
        set_infos({
            ...infos,
            email_value: event.target.value
        })
    }

    const pwdChangeHandler = (event) => {
        set_infos({
            ...infos,
            pwd_value: event.target.value
        })

        console.log(infos.pwd_value)
    }
    return(
        <div className="wrapper screen register_container">

            <ul className="register_label">
                <li><h1>Register</h1></li>
                <li><p>If you already have an account click <span><Link to={"/"}>here</Link></span></p></li>
            </ul>

            <form onSubmit={handleSubmit(addPost)} className="login_section">

                <div className="my_labels email">
                <label id="email_label">Email</label>
                <input type="email" name="email" {...register("email", {required: true})} onChange={emailChangeHandler} placeholder="example@hotmail.com"/>
                </div>

                <div className="my_labels pwd">
                <label>Password</label>
                <input type="password"  name="password" minLength={4} {...register("password", {required: true})} onChange={pwdChangeHandler} placeholder="At least 4 characters" />
                </div>
            
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>

            <div className="styled_home">
                <h1>Um app feito para lembretes e anotações</h1>

                <ul className="style_block">
                    <li id="biggest_li"></li>
                    <li className="low_li"></li>
                    <li className="low_li"></li>
                    <li className="low_li"></li>
                </ul>    

                <ul className="another_block">
                    <li id="biggest_li"></li>
                    <li className="low_li"></li>
                    <li className="low_li"></li>
                </ul>          

                <div className="end_phrase">
                    <h2 id="only_full">Bem vindo de volta!</h2>
                    <h3>Começe já a tomar nota dos seus afazeres</h3>
                </div>

                <p>@ 2023 ALL RIGHTS RESERVED</p>
            </div>
        </div>

        
    )
}

export default Register