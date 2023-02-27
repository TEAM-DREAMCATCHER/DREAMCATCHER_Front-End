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
import Landing from '@/pages/Landing'
import ListView from '@/pages/home/ListView'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Onboarding />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/landing',
        element: <Landing />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/home',
        errorElement: <ErrorPage />,
        element: <Home />,
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
        path: '/community/:id',
        element: <Detail />,
        errorElement: <ErrorPage />,
    },
])

export default router
