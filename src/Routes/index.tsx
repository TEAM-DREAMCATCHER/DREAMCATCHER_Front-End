import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import ErrorPage from '../pages/ErrorPage'
import Recording from '../pages/recording'
import SignUp from '../pages/signup'
import Onboarding from '../pages/onboarding'
import Welcome from '@/pages/welcome'
import Community from '../pages/community/community'
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
        element: <Home />,
        errorElement: <ErrorPage />,
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
        errorElement: <Community />,
    },
    {
        path: '/community/:id',
        element: <Detail />,
        errorElement: <Detail />,
    },
    {
        path: '/list',
        element: <ListView />,
        errorElement: <ListView />,
    },
])

export default router
