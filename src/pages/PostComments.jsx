import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import PostService from "../API/PostService"
import Loader from "../components/UI/loader/Loader"

const PostComments = () => {
    const params = useParams()

    const [post, setPost] = useState({})

    const [comments, setComments] = useState([])

    const [fetchPostById, loading, error] = useFetch(async (id) => {
        const response = await PostService.getPostById(id)
        setPost(response.data)
    })

    const [fetchComments, commLoading, commError] = useFetch(async (id) => {
        const response = await PostService.getComments(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    

    return (
        <div>

            {error &&
                <div className="postlist_header">
                    <h1>Oops! {error}...</h1>
                </div>
            }

            {loading
                ? <Loader/>
                : <div className='post'>

                    <div className="post__header">
                        <h1>{post.id}. {post.title}</h1>
                    </div>

                    <div className='post__body'>
                        {post.body}
                    </div>
                </div>
            }

            <div className="postlist_header">
                <h2>comments:</h2>
            </div>

            {commError &&
                <div className="postlist_header">
                    <h2>Oops! {commError}...</h2>
                </div>
            }

            {commLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div className='post' key={comm.id}>

                            <div className="post__header">
                                <h2>{comm.email}</h2>
                            </div>

                            <div className='post__body'>
                                {comm.body}
                            </div>

                        </div>
                    )}
                </div>
            }

        </div>
    )
}

export default PostComments
