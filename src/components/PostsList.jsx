import React from 'react'
import Post from './Post'

const PostsList = ({posts, remove}) => {
    return (
        <div className='posts_list'>
            <h1>The latest posts</h1>

            {posts.map(post =>
                <Post post={post} remove={remove} key={post.id}/>
            )}
        </div>
    )
}

export default PostsList
