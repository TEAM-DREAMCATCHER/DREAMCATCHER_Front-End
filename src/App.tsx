import { RouterProvider, useNavigate, useNavigation } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyle'
import router from './Routes'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import '../src/components/record/footer/datePicker.css'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        if (['/', '/onboarding', '/login', '/signup'].includes(window.location.pathname)) {
            return
        } else {
            if (!localStorage.getItem('access-token')) {
                console.log('시작으로 이동')
                window.location.href = '/ '
            }
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
