import ErrorPage from '@/pages/ErrorPage'
import Home from '@/pages/home'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import ErrorPage from '../pages/ErrorPage'
import Recording from '../pages/recording'
import SignUp from '../pages/signup'
import Onboarding from '../pages/onboarding'
import Welcome from '@/pages/welcome'
import Community from '../pages/community/community'
import Test from '../pages/Test/test'
import Signin from '@/pages/signin'
import Detail from '@/pages/detail'


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
    },
    {
        path: '/signin',
        element: <Signin />,
        errorElement: <ErrorPage />,
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
    },
    {
        path: '/community',
        element: <Community />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/test',
        element: <Test />,
        errorElement: <ErrorPage />,
    },
])

export default router
