import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import ErrorPage from '../pages/ErrorPage'
import Recording from '../pages/recording'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [{ path: 'recording', element: <Recording /> }],
        errorElement: <ErrorPage />,
    },
])

export default router
