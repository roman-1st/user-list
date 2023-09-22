import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from '../pages/router'

import '../shared/styles/global/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const App: FC = () => {
    return <RouterProvider router={router} />
}