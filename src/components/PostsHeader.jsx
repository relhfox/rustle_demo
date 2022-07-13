const PostsHeader = ({posts}) => {
    return (
        <div>
            {posts.length
                ? <h1>The latest posts</h1>
                : <h1>No posts found...</h1>
            }
        </div>
    )
}

export default PostsHeader
