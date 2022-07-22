import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context"
import MyButton from "./UI/button/MyButton"

const MyHeader = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <header className="header link">

            <div className="logo">
                <Link to="/">RUSTLE DEMO</Link>
            </div>

            <nav>
                <ul className="navbar">
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/jsonph">Server & Pagination</Link></li>
                    <li><Link to="/endless">Endless Feed</Link></li>
                </ul>
            </nav>

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
