import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import ErrorPage from '../pages/ErrorPage'
import SignUp from '../pages/signup'
import Onboarding from '../pages/onboarding'
import Community from '../pages/community/community'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Onboarding />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/signup',
        element: <SignUp />,
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
