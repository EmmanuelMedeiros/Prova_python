import "./styles/home.css"
import  logo from "./commons/logo.png"
import { useEffect, useState } from "react"

function Home() {

    const [state, set_state] = useState()

    useEffect(() => {
        console.log(window.screen.width)

        console.log(state)
    })

    let for_mobile = true

    if(state >= "768") {
        for_mobile = false
    } else {
        for_mobile = true
    }

    return(
        <div className="wrapper screen home_container">
            <ul className="logo_section">
                <li><img src={logo}/></li>
                <li><h1>Tome nota</h1></li>
            </ul>

            <ul className="login_label">
                <li><h1>Login</h1></li>
                <li><p>Or register by clicking <span>here</span></p></li>
            </ul>

            <form action="" className="login_section">

                <div className="my_labels">
                <label>Email</label>
                <input type="email" placeholder="example@hotmail.com" name="" id="email" />
                </div>

                <div className="my_labels">
                <label>Password</label>
                <input type="password" placeholder="At least 4 characters" name="" id="pwd" />
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
                <p>@ 2023 ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}

export default Home