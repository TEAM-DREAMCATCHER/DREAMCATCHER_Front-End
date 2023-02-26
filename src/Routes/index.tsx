import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import ErrorPage from '../pages/ErrorPage'
import SignUp from '../pages/signup'
import Welcome from '@/pages/welcome'
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
    {
        path: '/signup',
        element: <SignUp />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/welcome',
        element: <Welcome />,
        errorElement: <ErrorPage />,
    },
])

export default router
