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
        <div>
            <h1>Login</h1>
            <form onSubmit={authorize}>
                <MyInput type='text' defaultValue='SpongeBob' />
                <MyInput type='password' defaultValue='squarepants' />
                <MyButton>Just push it!</MyButton>
            </form>
        </div>
    )
}

export default Login
