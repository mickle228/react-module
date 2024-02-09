import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService = {
    getAll: () => apiService.get(urls.comments.base),
    create: (data) => apiService.post(urls.comments.base, data)
}

export {
    commentService
}