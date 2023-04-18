import "./styles/home.css"
import  logo from "./commons/logo.png"

function Home() {
    return(
        <div className="wrapper home_container">
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
        </div>
    )
}

export default Home