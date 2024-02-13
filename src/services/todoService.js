import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const todoService = {
    getAll: () => apiService.get(urls.todos.base),
}

export {
    todoService
}