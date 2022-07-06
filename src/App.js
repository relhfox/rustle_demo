import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/App.css'
import ServerPosts from './pages/ServerPosts'
import PostComments from './pages/PostComments'
import Error from './pages/Error'

function App() {

    return (
        <BrowserRouter>
        
            <div className='container'>
                <Routes>
                    <Route path="/" element={<ServerPosts/>} />
                    <Route path="/post/:id" element={<PostComments/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </div>

        </BrowserRouter>
    )
}

export default App;
