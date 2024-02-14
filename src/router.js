import {createBrowserRouter, Navigate} from "react-router-dom";

import {userService} from "./services/userService";
import MainLayout from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDatailsPage";

const router = createBrowserRouter([
        {
            path: '', element: <MainLayout/>, children: [
                {
                    index: true, element: <Navigate to={'users'}/>
                },
                {
                    path: 'users', element: <UsersPage/>, loader: () => userService.getAll(), children: [
                        {
                            path: ':id', element: <UserDetailsPage/>, loader:({params:{id}})=>userService.getById(id)
                        },
                    ]
                }
            ]
        }
    ])
;

export {
    router
}