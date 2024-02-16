import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDatailsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import PostsTittlesPage from "./pages/PostsTittlesPage";

const router = createBrowserRouter([
        {
            path: '', element: <MainLayout/>, children: [
                {
                    index: true, element: <Navigate to={'users'}/>
                },
                // {
                //     path: 'users', element: <UsersPage/>, loader: () => userService.getAll(), children: [
                //         {
                //             path: ':id', element: <UserDetailsPage/>, loader:({params:{id}})=>userService.getById(id)
                //         },
                //     ]
                // }
                {
                    path: 'users', element: <UsersPage/>
                },
                {
                    path: 'user-details/:id', element: <UserDetailsPage/>, children: [
                        {
                            path: 'titles', element: <PostsTittlesPage/>
                        }
                    ]
                },
                {
                    path: 'post-details/:id', element: <PostDetailsPage/>
                }
            ]
        }
    ])
;

export {
    router
}