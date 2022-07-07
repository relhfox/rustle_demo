import { useContext } from "react"
import { AuthContext } from "../context"
import MyButton from "./UI/button/MyButton"

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div>
            {isAuth &&
                <MyButton onClick={logout}>
                    Logout
                </MyButton>
            }
        </div>
    )
}

export default NavBar
