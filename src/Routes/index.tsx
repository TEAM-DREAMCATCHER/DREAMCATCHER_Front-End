import ErrorPage from '@/pages/ErrorPage'
import Home from '@/pages/home'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
])

export default router
