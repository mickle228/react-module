const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos'
const albums = '/albums'
const comments = '/comments'

const urls = {
    todos: {
        base: todos,
    },
    albums: {
        base: albums,
    },
    comments: {
        base: comments,
        getPostById: (id) => `/posts/${id}`
    }
}

export {
    baseURL,
    urls
}