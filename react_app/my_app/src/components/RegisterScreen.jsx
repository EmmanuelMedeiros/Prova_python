import "./styles/registerScreen.css"

function RegisterScreen() {
    return(
        <div className="wrapper register_container">
            <h1>Register to your account</h1>

            <form>
                <div className="sections">
                <label><h2>Username:</h2></label>
                <input type="text" name="" id="" />
                </div>

                <div className="sections">
                <label><h2>Nickname: </h2></label>
                <input type="text" name="" id="nick_input" />
                </div>

                <div className="sections">
                <label><h2>Age:</h2></label>
                <input type="text" name="" id="age_input" />
                </div>

                <div className="sections">
                <label><h2>Password:</h2></label>
                <input type="password" name="" id="pwd_input" />
                </div>
                
            </form>
        </div>
    )
}

export default RegisterScreen