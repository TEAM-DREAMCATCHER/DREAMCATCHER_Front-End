import { RouterProvider } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyle'
import router from './Routes'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import '../src/components/record/footer/datePicker.css'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
