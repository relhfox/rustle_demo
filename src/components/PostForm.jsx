import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addPost = (e) => {
        e.preventDefault()

        const newPost = {id: Date.now(), ...post}

        create(newPost)

        setPost({title: '', body: ''})
    }

    return (
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
    )
}

export default PostForm
