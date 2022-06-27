import React, { useState, useMemo } from 'react'
import './styles/App.css'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'

function App() {

  const [posts, setPosts] = useState([
    {id: 1555555555555, title: 'Post header turtle', body: 'Some text here. Some text here.'},
    {id: 1444444444444, title: 'Post header here', body: 'Some text here. Some rabbit here.'},
    {id: 1333333333333, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 1222222222222, title: 'Post rabbit here', body: 'Some turtle here. Some text here.'},
    {id: 1111111111111, title: 'Post header here', body: 'Some text here. Some text here.'}
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if (selectedSort) {

      if (selectedSort === 'old') {
        return [...posts].sort((a, b) => a.id - b.id)
      } else if (selectedSort === 'new') {
        return [...posts].sort((a, b) => b.id - a.id)
      }
    }

    return posts

  }, [selectedSort, posts])

  const sortedSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.body.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([newPost, ...posts].sort((a, b) => b.id - a.id))
    setSelectedSort('')
    setSearchQuery('')
  }

  const removePost = (removingPost) => {
    setPosts(posts.filter(post => post.id !== removingPost.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className='container'>

      <PostForm create={createPost}/>

      <MyInput
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Search post...'
      />

      <MySelect
        value={selectedSort}
        change={sortPosts}
        defaultValue='Sort by'
        options={[
          {value: 'new', name: 'New first'},
          {value: 'old', name: 'Oldest first'}
        ]}
      />

      {sortedSearchedPosts.length
        ? <PostsList posts={sortedSearchedPosts} remove={removePost}/>
        : <h1>No posts found...</h1>
      }

    </div>
  )
}

export default App;
