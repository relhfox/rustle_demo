import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './context'
import './styles/App.css'
import NavBar from './components/NavBar'
import MyRouter from './components/MyRouter'

function App() {

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <BrowserRouter>

                <NavBar />

                <div className='container'>
                    <MyRouter />
                </div>

            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
