import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import ErrorPage from '../pages/ErrorPage'
import SignUp from '../pages/signup'
import Welcome from '@/pages/welcome'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
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
