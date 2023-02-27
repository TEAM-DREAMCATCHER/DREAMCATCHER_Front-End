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
        path: '/onboarding',
        element: <Onboarding />,
        errorElement: <Onboarding />,
    },
    {
        path: '/',
        element: <Landing />,
        errorElement: <Landing />,
    },
    {
        path: '/home',
        errorElement: <ErrorPage />,
        element: <ErrorPage />,
    },
    {
        path: '/signup',
        element: <SignUp />,
        errorElement: <SignUp />,
    },
    {
        path: '/signin',
        element: <Signin />,
        errorElement: <Signin />,
    },
    {
        path: '/welcome',
        element: <Welcome />,
        errorElement: <Welcome />,
    },
    {
        path: '/recording',
        element: <Recording />,
        errorElement: <Recording />,
    },
    {
        path: '/community',
        element: <Community />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/community/:id',
        element: <Detail />,
        errorElement: <Detail />,
    },
    {
        path: '/test',
        element: <Test />,
        errorElement: <Test />,
    },
    {
        path: '/list',
        element: <ListView />,
        errorElement: <ListView />,
    },
])

export default router
