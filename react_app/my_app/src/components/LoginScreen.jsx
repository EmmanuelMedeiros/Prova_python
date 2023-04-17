import "./styles/loginScreen.css"

function LoginScreen() {
    return(
        <div className="wrapper login_container">
            <h1>Login to your account</h1>

            <form>
                <div className="sections">
                <label><h2>Username:</h2></label>
                <input type="text" name="" id="" />
                </div>

                <div className="sections">
                <label><h2>Password:</h2></label>
                <input type="password" name="" id="pwd_input" />
                </div>
                
            </form>
        </div>
    )
}

export default LoginScreen