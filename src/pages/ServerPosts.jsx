import { useState, useEffect } from 'react'
import { usePosts } from '../hooks/usePosts'
import { useFetch } from '../hooks/useFetch'
import { getPagesCount } from '../utils/pages'
import PostService from '../API/PostService'
import PostsList from '../components/PostsList'
import PostsFilter from '../components/PostsFilter'
import Loader from '../components/UI/loader/Loader'
import Pagination from '../components/UI/pagination/Pagination'
import PostsHeader from '../components/PostsHeader'

const ServerPosts = () => {
    
    const [posts, setPosts] = useState([])

    const [postFilter, setPostFilter] = useState({sort: '', search: ''})

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

    const removePost = (removingPost) => {
        setPosts(posts.filter(post => post.id !== removingPost.id))
    }

    return (
        <div>

            <PostsFilter filter={postFilter} setFilter={setPostFilter} />

            {loadError && <h1>Oops! {loadError}...</h1>}

            <PostsHeader posts={sortedSearchedPosts} />

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
                : <PostsList posts={sortedSearchedPosts} remove={removePost} isBlog={false} />
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
