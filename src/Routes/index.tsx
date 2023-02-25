import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import ErrorPage from '../pages/ErrorPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
])

export default router
