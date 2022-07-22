import { useState, useEffect, useRef } from 'react'
import { usePosts } from '../hooks/usePosts'
import { useFetch } from '../hooks/useFetch'
import { getPagesCount } from '../utils/pages'
import PostService from '../API/PostService'
import PostsList from '../components/PostsList'
import PostsFilter from '../components/PostsFilter'
import Loader from '../components/UI/loader/Loader'
import PostsHeader from '../components/PostsHeader'

const EternalPosts = () => {
    
    const [posts, setPosts] = useState([])

    const [postFilter, setPostFilter] = useState({sort: '', search: ''})

    const [totalPages, setTotalPages] = useState(0)

    const [postsLimit, setPostsLimit] = useState(7)

    const [currPage, setCurrPage] = useState(1)

    const triggerDiv = useRef()

    const observer = useRef()

    const sortedSearchedPosts = usePosts(posts, postFilter.sort, postFilter.search)

    const [fetchPosts, postsLoading, loadError] = useFetch(async () => {
        const response = await PostService.getPosts(postsLimit, currPage)
        setPosts([...posts, ...response.data])
        const totalPosts = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalPosts, postsLimit))
    })

    useEffect(() => {
        if (postsLoading) {
            return
        }

        if (observer.current) {
            observer.current.disconnect()
        }

        var options = {
            threshold: 0.7
        }

        var callback = function(entries, observer) {
            if (entries[0].isIntersecting && currPage < totalPages) {
                setCurrPage(currPage + 1)
            }
        }

        observer.current = new IntersectionObserver(callback, options)
        observer.current.observe(triggerDiv.current)

    }, [postsLoading])

    useEffect(() => {
        fetchPosts()
    }, [currPage])

    const removePost = (removingPost) => {
        setPosts(posts.filter(post => post.id !== removingPost.id))
    }

    return (
        <div>

            <div className="postlist_header disclaimer">
                And finally, as for the icing on the cake, here's the endless feed. Test your scrolling skills! Try to catch the rabbit!
            </div>

            <PostsFilter filter={postFilter} setFilter={setPostFilter} />

            {loadError &&
                <div className="postlist_header">
                    <h1>Oops! {loadError}...</h1>
                </div>
            }

            <PostsHeader posts={sortedSearchedPosts} />

            <PostsList posts={sortedSearchedPosts} remove={removePost} isBlog={false} />

            <div ref={triggerDiv} className='trigger'>
                RABBIT
            </div>

            {postsLoading && <Loader />}

        </div>
    )
}

export default EternalPosts
