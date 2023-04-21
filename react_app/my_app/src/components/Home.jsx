import "./styles/home.css"
import  logo from "./commons/logo.png"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home() {

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

            <form action="" className="login_section">

                <div className="my_labels email">
                <label id="email_label">Email</label>
                <input type="email" placeholder="example@hotmail.com" name="" id="email" />
                </div>

                <div className="my_labels pwd">
                <label>Password</label>
                <input type="password" placeholder="At least 4 characters" name="" id="pwd" />
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
            </div>
        </div>
    )
}

export default Home