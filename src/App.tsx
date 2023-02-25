import React from 'react'
import { RouterProvider } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyle'
import router from './Routes'
import Community from './pages/community/community'

function App() {
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router} />

            <Community />
        </>
    )
}

export default App
