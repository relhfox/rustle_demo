import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Post from './Post'

const PostsList = ({posts, remove}) => {

    if (!posts.length) {

        return (
            <h1>No posts found...</h1>
        )

    } else {

        return (
            <div className='posts_list'>
                <h1>The latest posts</h1>

                <TransitionGroup>
                    {posts.map(post =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <Post post={post} remove={remove} />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        )
    }
}

export default PostsList
