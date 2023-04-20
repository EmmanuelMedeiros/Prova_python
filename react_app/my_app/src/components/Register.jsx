import "./styles/register.css"

function Register() {
    return(
        <div className="wrapper screen register_container">

            <ul className="register_label">
                <li><h1>Register</h1></li>
                <li><p>If you already have an account click <span>here</span></p></li>
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