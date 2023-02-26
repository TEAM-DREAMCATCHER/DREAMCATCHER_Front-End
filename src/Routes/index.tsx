import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import ErrorPage from '../pages/ErrorPage'
import Community from '../pages/community/community'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'community',
                element: <Community />,
            },
        ],
    },
])

export default router
