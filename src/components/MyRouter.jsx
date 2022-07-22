import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthContext } from '../context'
import ServerPosts from '../pages/ServerPosts'
import EternalPosts from '../pages/EternalPosts'
import PostComments from '../pages/PostComments'
import Error from '../pages/Error'
import Login from '../pages/Login'
import Blog from '../pages/Blog'

const MyRouter = () => {
    const {isAuth} = useContext(AuthContext)

    return (
        <div>
            {isAuth
                ?
                <Routes>
                    <Route path="/" element={<Blog/>} />
                    <Route path="/jsonph" element={<ServerPosts/>} />
                    <Route path="/endless" element={<EternalPosts/>} />
                    <Route path="/post/:id" element={<PostComments/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>
                :
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/jsonph" element={<Login/>} />
                    <Route path="/endless" element={<Login/>} />
                    <Route path="/post/:id" element={<Login/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            }
        </div>
    )
}

export default MyRouter
