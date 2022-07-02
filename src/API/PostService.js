import axios from 'axios'

export default class PostService {
    static async getPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data.sort((a, b) => b.id - a.id)
    }
}
