import "./styles/home.css"
import  logo from "./commons/logo.png"
import error_img from "./commons/error.png"

import { useState, useContext } from "react"
import { UserContext } from "../context/UserContext.jsx"

import { Link, useNavigate } from "react-router-dom"

import axios from "axios"

function Home() {

    const {user_data, set_user_data} = useContext(UserContext)

    const navigate = useNavigate()

    const [login, set_login] = useState({
        login_email: "",
        login_pwd: ""
    })

    const [error, set_error] = useState(false)

    const ChangeEmailHandler = (event) => {
        set_login({
            ...login,
            login_email: event.target.value
        })
    }

    const ChangePwdHandler = (event) => {
        set_login({
            ...login,
            login_pwd: event.target.value
        })
    }

    const SubmitHandler = (event) => {

        event.preventDefault()

        if(login.login_email.length < 1 || login.login_pwd.length < 4) {
            set_error(true)
        } else {
            axios.get(`https://localhost:7281/${login.login_email}/${login.login_pwd}`)
            .then(response => {

            if(response.status == 200) {
                set_user_data(response.data)
                navigate('/todo-list')
            }
        })
        }
    }

    return(
        <div className="wrapper teste screen home_container">
            
            <ul className="logo_section">
                <li><img src={logo}/></li>
                <li><h1>Tome_nota</h1></li>
            </ul>

            <ul className="login_label">
                <li><h1>Login</h1></li>
                <li><p>Or register by clicking<span><Link to={'/register'}>here</Link></span></p></li>
            </ul>

            <form onSubmit={SubmitHandler} className="login_section">

                <div className="my_labels email">
                <label id="email_label">Email</label>
                <input type="email" onChange={ChangeEmailHandler} placeholder="example@hotmail.com" name="" id="email" />
                </div>

                <div className="my_labels pwd">
                <label>Password</label>
                <input type="password" onChange={ChangePwdHandler} placeholder="At least 4 characters" name="" id="pwd" />
                </div>

                <div>
                    <button type="submit">Login</button>
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

                <div className={error ? "error_msg" : "not_error"}>
                    <h2>Verifique se os dados foram inseridos corretamente!</h2>
                    <img src={error_img}/>
                    <button onClick={() => set_error(false)}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default Home