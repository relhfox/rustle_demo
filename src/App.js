import React, { useState } from 'react'
import './styles/App.css'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'

function App() {

  const [posts, setPosts] = useState([
    {id: 5, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 4, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 3, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 2, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 1, title: 'Post header here', body: 'Some text here. Some text here.'}
  ])

  const createPost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  const removePost = (removingPost) => {
    setPosts(posts.filter(post => post.id !== removingPost.id))
  }

  return (
    <div className='container'>

      <PostForm create={createPost}/>

      {posts.length
        ? <PostsList posts={posts} remove={removePost}/>
        : <h1>No posts found...</h1>
      }

    </div>
  )
}

export default App;
