import React from 'react'
import { Outlet } from 'react-router-dom'

const home = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default home
