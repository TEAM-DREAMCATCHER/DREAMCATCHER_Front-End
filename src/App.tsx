import { RouterProvider } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyle'
import router from './Routes'

function App() {
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router} />
        </>
    )
}

export default App
