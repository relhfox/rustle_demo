import MyButton from './UI/button/MyButton'

const Post = ({post, remove}) => {
    return (
        <div className='post'>

            <div className='post__header'>
                <h2>{post.id} {post.title}</h2>
            </div>

            <div className='post__body'>
                {post.body}
            </div>

            <div className='post__buttons'>
                <MyButton onClick={() => remove(post)}>
                    Delete
                </MyButton>
            </div>

        </div>
    )
}

export default Post
