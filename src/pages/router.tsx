import { createBrowserRouter } from 'react-router-dom'

import { routes } from '../shared/routes';
import {PostsPage} from "./PostsPage";
import {PostPage} from "./PostPage";

export const router = createBrowserRouter([
    {
        path: routes.WELCOME,
        element: <PostsPage />,
    },
    {
        path: routes.POST,
        element: <PostPage />,
    },
])