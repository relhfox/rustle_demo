import { useState, useEffect } from 'react'
import MyInput from './UI/input/MyInput'
import MyTextArea from './UI/textarea/MyTextArea'
import MyButton from './UI/button/MyButton'

const PostForm = ({create, toEdit, setToEdit}) => {

    const [post, setPost] = useState({title: '', body: ''})

    useEffect(() => {
        if (Object.keys(toEdit).length !== 0) {
            setPost(toEdit)
        }
    }, [toEdit])
    
    const addPost = (e) => {
        e.preventDefault()

        if (post.title && post.body) {
            
            if (Object.keys(toEdit).length !== 0) {
                create(post)
                setToEdit({})

            } else {
                const newPost = {id: Date.now(), ...post}
                create(newPost)
            }
            
            setPost({title: '', body: ''})
        }
    }

    return (
        <form className='post_form'>

            <MyInput
                type='text'
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                placeholder='Post title...'
                size='30'
            />

            <MyTextArea
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                placeholder='Post text...'
            />

            <div>
                <MyButton onClick={addPost}>Submit</MyButton>
            </div>
            
        </form>
    )
}

export default PostForm
