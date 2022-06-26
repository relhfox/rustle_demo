import React, { useState } from 'react'
import './styles/App.css'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'

function App() {

  const [posts, setPosts] = useState([
    {id: 1555555555555, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 1444444444444, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 1333333333333, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 1222222222222, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 1111111111111, title: 'Post header here', body: 'Some text here. Some text here.'}
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([newPost, ...posts].sort((a, b) => b.id - a.id))
    setSelectedSort('')
  }

  const removePost = (removingPost) => {
    setPosts(posts.filter(post => post.id !== removingPost.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)

    if (sort === 'old') {
      setPosts([...posts].sort((a, b) => a.id - b.id))
    } else if (sort === 'new') {
      setPosts([...posts].sort((a, b) => b.id - a.id))
    }
  }

  return (
    <div className='container'>

      <PostForm create={createPost}/>

      <MySelect
        value={selectedSort}
        change={sortPosts}
        defaultValue='Sort by'
        options={[
          {value: 'new', name: 'New first'},
          {value: 'old', name: 'Oldest first'}
        ]}
      />

      {posts.length
        ? <PostsList posts={posts} remove={removePost}/>
        : <h1>No posts found...</h1>
      }

    </div>
  )
}

export default App;
