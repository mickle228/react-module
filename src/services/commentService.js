import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService = {
    getAll: () => apiService.get(urls.comments.base),
    getPostById: (id) => apiService.get(urls.comments.getPostById(id))
}

export {
    commentService
}