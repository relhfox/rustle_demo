import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Post from './Post'

const PostsList = ({posts, remove, edit}) => {

    return (
        <div className='posts_list'>
            <TransitionGroup>
                {posts.map(post =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post post={post} remove={remove} edit={edit} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostsList
