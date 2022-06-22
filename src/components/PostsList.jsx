import React from 'react'
import Post from './Post'

const PostsList = ({posts}) => {
    return (
        <div className='posts_list'>
            <h1>The latest posts</h1>

            {posts.map(post =>
                <Post post={post} key={post.id}/>
            )}
        </div>
    )
}

export default PostsList
