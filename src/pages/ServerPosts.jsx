import { useState, useEffect } from 'react'
import { usePosts } from '../hooks/usePosts'
import { useFetch } from '../hooks/useFetch'
import { getPagesCount } from '../utils/pages'
import PostService from '../API/PostService'
import PostsList from '../components/PostsList'
import PostForm from '../components/PostForm'
import PostsFilter from '../components/PostsFilter'
import MyModal from '../components/UI/modal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/loader/Loader'
import Pagination from '../components/UI/pagination/Pagination'

const ServerPosts = () => {
    
    const [posts, setPosts] = useState([])

    const [postFilter, setPostFilter] = useState({sort: '', search: ''})

    const [modal, setModal] = useState(false)

    const [totalPages, setTotalPages] = useState(0)

    const [postsLimit, setPostsLimit] = useState(10)

    const [currPage, setCurrPage] = useState(1)

    const sortedSearchedPosts = usePosts(posts, postFilter.sort, postFilter.search)

    const [fetchPosts, postsLoading, loadError] = useFetch(async () => {
        const response = await PostService.getPosts(postsLimit, currPage)
        setPosts(response.data.sort((a, b) => b.id - a.id))
        const totalPosts = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalPosts, postsLimit))
    })

    useEffect(() => {
        fetchPosts()
    }, [postsLimit, currPage])

    const createPost = (newPost) => {
        setPosts([newPost, ...posts].sort((a, b) => b.id - a.id))
        setPostFilter({sort: '', search: ''})
        setModal(false)
    }

    const removePost = (removingPost) => {
        setPosts(posts.filter(post => post.id !== removingPost.id))
    }

    return (
        <div>

            <MyButton onClick={() => setModal(true)}>New post</MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <PostsFilter filter={postFilter} setFilter={setPostFilter} />

            {loadError && <h1>Oops! {loadError}...</h1>}

            {sortedSearchedPosts.length
                ? <h1>The latest posts</h1>
                : <h1>No posts found...</h1>
            }

            {sortedSearchedPosts.length
                ?
                <Pagination
                    totalPages={totalPages}
                    currPage={currPage}
                    setCurrPage={setCurrPage}
                    limit={postsLimit}
                    setLimit={setPostsLimit}
                />
                :
                <span />
            }

            {postsLoading
                ? <Loader />
                : <PostsList posts={sortedSearchedPosts} remove={removePost} />
            }

            {sortedSearchedPosts.length
                ?
                <Pagination
                    totalPages={totalPages}
                    currPage={currPage}
                    setCurrPage={setCurrPage}
                    limit={postsLimit}
                    setLimit={setPostsLimit}
                />
                :
                <span />
            }

        </div>
    )
}

export default ServerPosts
