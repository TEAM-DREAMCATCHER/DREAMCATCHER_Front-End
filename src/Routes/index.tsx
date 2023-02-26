import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import ErrorPage from '../pages/ErrorPage'
import Recording from '../pages/recording'
import SignUp from '../pages/signup'
import Onboarding from '../pages/onboarding'
import Welcome from '@/pages/welcome'
import Community from '../pages/community/community'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Onboarding />,
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
        children: [
            {
                path: 'community',
                element: <Community />,
            },
        ],
    },
    {
        path: '/welcome',
        element: <Welcome />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/recording',
        element: <Recording />,
        errorElement: <ErrorPage />,
    }
])

export default router
