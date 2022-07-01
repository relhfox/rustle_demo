import React, { useState } from 'react'
import { usePosts } from './hooks/usePosts'
import './styles/App.css'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import PostsFilter from './components/PostsFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'

function App() {

  const [posts, setPosts] = useState([
    {id: 1555555555555, title: 'Post header turtle', body: 'Some text here. Some text here.'},
    {id: 1444444444444, title: 'Post header here', body: 'Some text here. Some rabbit here.'},
    {id: 1333333333333, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 1222222222222, title: 'Post rabbit here', body: 'Some turtle here. Some text here.'},
    {id: 1111111111111, title: 'Post header here', body: 'Some text here. Some text here.'}
  ])

  const [postFilter, setPostFilter] = useState({sort: '', search: ''})

  const [modal, setModal] = useState(false)

  const sortedSearchedPosts = usePosts(posts, postFilter.sort, postFilter.search)

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

      <PostsList posts={sortedSearchedPosts} remove={removePost} />

    </div>
  )
}

export default App;
