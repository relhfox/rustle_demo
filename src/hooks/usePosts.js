import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => {

    const sortedPosts = useMemo(() => {
        if (sort) {
    
            if (sort === 'old') {
                return [...posts].sort((a, b) => a.id - b.id)
            } else if (sort === 'new') {
                return [...posts].sort((a, b) => b.id - a.id)
            }
        }
    
        return posts
    
    }, [sort, posts])

    return sortedPosts
}

export const usePosts = (posts, sort, search) => {

    const sortedPosts = useSortedPosts(posts, sort)

    const sortedSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortedPosts])

    return sortedSearchedPosts
}
