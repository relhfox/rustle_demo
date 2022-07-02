import React, { useState, useEffect } from 'react'
import { usePosts } from './hooks/usePosts'
import { useFetch } from './hooks/useFetch'
import PostService from './API/PostService'
import './styles/App.css'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import PostsFilter from './components/PostsFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'
import Loader from './components/UI/loader/Loader'

function App() {

    const [posts, setPosts] = useState([])

    const [postFilter, setPostFilter] = useState({sort: '', search: ''})

    const [modal, setModal] = useState(false)

    const sortedSearchedPosts = usePosts(posts, postFilter.sort, postFilter.search)

    const [fetchPosts, postsLoading, loadError] = useFetch(async () => {
        const receivedPosts = await PostService.getPosts()
        setPosts(receivedPosts)
    })

    useEffect(() => {
        fetchPosts()
    }, [])
    
    const createPost = (newPost) => {
        setPosts([newPost, ...posts].sort((a, b) => b.id - a.id))
        setPostFilter({sort: '', search: ''})
        setModal(false)
    }

    const removePost = (removingPost) => {
        setPosts(posts.filter(post => post.id !== removingPost.id))
    }

    return (
        <div className='container'>

            <MyButton onClick={() => setModal(true)}>New post</MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <PostsFilter filter={postFilter} setFilter={setPostFilter} />

            {loadError && <h1>Oops! {loadError}...</h1>}

            {postsLoading
                ? <Loader />
                : <PostsList posts={sortedSearchedPosts} remove={removePost} />
            }

        </div>
    )
}

export default App;
