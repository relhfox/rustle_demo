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
            {error && <h1>Oops! {error}...</h1>}

            {loading
                ? <Loader/>
                : <div>
                    <h1>{post.title}</h1>
                    <div>
                        {post.body}
                    </div>
                </div>
            }

            <h1>comments:</h1>

            {commError && <h1>Oops! {commError}...</h1>}

            {commLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div>
                            <h2>{comm.email}</h2>
                            {comm.body}
                        </div>
                    )}
                </div>
            }

        </div>
    )
}

export default PostComments
