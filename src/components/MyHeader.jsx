import { useContext } from "react"
import { AuthContext } from "../context"
import MyButton from "./UI/button/MyButton"

const MyHeader = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <header className="header">
            <div className="logout">
                {isAuth &&
                    <MyButton onClick={logout}>
                        Logout
                    </MyButton>
                }
            </div>
        </header>
    )
}

export default MyHeader
