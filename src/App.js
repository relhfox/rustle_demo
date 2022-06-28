import React, { useState, useMemo } from 'react'
import './styles/App.css'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import PostsFilter from './components/PostsFilter'

function App() {

  const [posts, setPosts] = useState([
    {id: 1555555555555, title: 'Post header turtle', body: 'Some text here. Some text here.'},
    {id: 1444444444444, title: 'Post header here', body: 'Some text here. Some rabbit here.'},
    {id: 1333333333333, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 1222222222222, title: 'Post rabbit here', body: 'Some turtle here. Some text here.'},
    {id: 1111111111111, title: 'Post header here', body: 'Some text here. Some text here.'}
  ])

  const [postFilter, setPostFilter] = useState({sort: '', search: ''})

  const sortedPosts = useMemo(() => {
    if (postFilter.sort) {

      if (postFilter.sort === 'old') {
        return [...posts].sort((a, b) => a.id - b.id)
      } else if (postFilter.sort === 'new') {
        return [...posts].sort((a, b) => b.id - a.id)
      }
    }

    return posts

  }, [postFilter.sort, posts])

  const sortedSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(postFilter.search.toLowerCase()) || post.body.toLowerCase().includes(postFilter.search.toLowerCase()))
  }, [postFilter.search, sortedPosts])

  const createPost = (newPost) => {
    setPosts([newPost, ...posts].sort((a, b) => b.id - a.id))
    setPostFilter({sort: '', search: ''})
  }

  const removePost = (removingPost) => {
    setPosts(posts.filter(post => post.id !== removingPost.id))
  }

  return (
    <div className='container'>

      <PostForm create={createPost} />

      <PostsFilter filter={postFilter} setFilter={setPostFilter} />

      <PostsList posts={sortedSearchedPosts} remove={removePost} />

    </div>
  )
}

export default App;
