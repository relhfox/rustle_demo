import React, { useState } from 'react'
import './styles/App.css'
import PostsList from './components/PostsList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 2, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 3, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 4, title: 'Post header here', body: 'Some text here. Some text here.'},
    {id: 5, title: 'Post header here', body: 'Some text here. Some text here.'}
  ])

  const [post, setPost] = useState({title: '', body: ''})

  const addPost = (e) => {
    e.preventDefault()

    setPosts([{id: Date.now(), ...post}, ...posts])
    setPost({title: '', body: ''})
  }

  return (
    <div className='container'>

      <form>

        <MyInput
          type='text'
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          placeholder='Post title...'
        />

        <MyInput
          type='text'
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          placeholder='Post text...'
        />

        <MyButton onClick={addPost}>Submit</MyButton>

      </form>

      <PostsList posts={posts}/>
      
    </div>
  );
}

export default App;
