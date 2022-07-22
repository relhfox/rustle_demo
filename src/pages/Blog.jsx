import { useState } from 'react'
import { usePosts } from '../hooks/usePosts'
import PostsList from '../components/PostsList'
import PostForm from '../components/PostForm'
import PostsFilter from '../components/PostsFilter'
import MyModal from '../components/UI/modal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import PostsHeader from '../components/PostsHeader'

const Blog = () => {
    
    const [posts, setPosts] = useState([
        {id: 4, title: 'Fourth post. Michelangelo', body: 'The youngest of the group, he is known for his wisecracks, love of skateboarding, witty optimism, and, like his brothers, love of pizza. He is usually depicted wearing an orange eye mask. His signature weapons are dual nunchaku.'},
        {id: 3, title: 'Third post. Raphael', body: 'He wields twin sai as his primary weapon. Raphael is known for his temperamental and cynical personality, being short-tempered, aggressive, sullen, maddened, sarcastic, and rebellious.'},
        {id: 2, title: 'Second post. Donatello', body: 'He is the second-in-command of the team and the tallest ninja turtle. Donnie often speaks in technobabble with a natural aptitude for science and technology. His ninja skills are the lowest of the four turtles; as he relies on gadgets over combat skills.'},
        {id: 1, title: 'First post. Leonardo', body: 'His signature weapons are two katana. The leader, as well as the most mature and disciplined of the Turtles. He wears an ocean-blue mask.'}
    ])

    const [postFilter, setPostFilter] = useState({sort: '', search: ''})

    const [modal, setModal] = useState(false)

    const [editingPost, setEditingPost] = useState({})

    const sortedSearchedPosts = usePosts(posts, postFilter.sort, postFilter.search)

    const createPost = (newPost) => {
        setPosts([...posts, newPost].sort((a, b) => b.id - a.id))
        setPostFilter({sort: '', search: ''})
        setModal(false)
    }

    const removePost = (removingPost) => {
        setPosts(posts.filter(post => post.id !== removingPost.id))
    }

    const editPost = (postToEdit) => {
        setEditingPost(postToEdit)
        setModal(true)
    }

    return (
        <div>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} toEdit={editingPost} setToEdit={setEditingPost} />
            </MyModal>

            <div className="postlist_header disclaimer">
                Now, imagine you're a famous blogger! Feel free to create a new posts, edit, and remove those! Indulge yourself, take your time!
            </div>

            <div className='newpost'>
                <MyButton onClick={() => setModal(true)}>New post</MyButton>

                <PostsFilter filter={postFilter} setFilter={setPostFilter} />
            </div>

            <PostsHeader posts={sortedSearchedPosts} />

            <PostsList posts={sortedSearchedPosts} remove={removePost} edit={editPost} isBlog={true} />

        </div>
    )
}

export default Blog
