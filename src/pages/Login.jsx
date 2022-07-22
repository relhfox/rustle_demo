import { useContext } from "react"
import { AuthContext } from "../context"
import MyInput from "../components/UI/input/MyInput"
import MyButton from "../components/UI/button/MyButton"

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)

    const authorize = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className="login__page">

            <div className="postlist_header disclaimer">
                Hey! I'm Max Rustle, and if you're reading this, you probably want to estimate my developer skills in React JS. I've made this web application with a view to get my first job as dev. Basically, it's a compilation of a front-end user interface features. Well, if you're ready to fall through a rabbit hole, push the button below!
            </div>

            <div className="login">

                <h1>Login</h1>
                <br />
                <br />

                <form className="login__form" onSubmit={authorize}>

                    <div className="login__input">
                        <MyInput type='text' defaultValue='SpongeBob' />
                    </div>

                    <div className="login__input">
                        <MyInput type='password' defaultValue='squarepants' />
                    </div>

                    <MyButton>Just push it!</MyButton>
                </form>

            </div>
        </div>
    )
}

export default Login
