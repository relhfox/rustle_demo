import { useNavigate } from 'react-router-dom'
import MyButton from './UI/button/MyButton'

const Post = ({post, remove, edit, isBlog}) => {
    const navigate = useNavigate()

    return (
        <div className='post'>

            <div className='post__header'>
                <h2>{!isBlog && <span>{post.id}.</span>} {post.title}</h2>
            </div>

            <div className='post__body'>
                {post.body}
            </div>

            <div className='post__buttons'>

                {isBlog &&
                    <MyButton onClick={() => edit(post)}>
                        Edit
                    </MyButton>
                }

                {!isBlog &&
                    <MyButton onClick={() => navigate(`/post/${post.id}`)}>
                        Comments
                    </MyButton>
                }

                <MyButton onClick={() => remove(post)}>
                    Delete
                </MyButton>
            </div>

        </div>
    )
}

export default Post
