import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './context'
import './styles/App.css'
import MyRouter from './components/MyRouter'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'

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

                <MyHeader />

                <div className='main'>
                    <MyRouter />
                </div>

                <MyFooter />

            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
