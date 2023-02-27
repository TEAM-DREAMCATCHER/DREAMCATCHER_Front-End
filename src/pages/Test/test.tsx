import React from 'react'
import AddButton from '@/components/common/AddButton'

const Test = () => {
    return (
        <div>
            <h1> hellow!!</h1>
            <span>hello world!</span>

            <AddButton />
            <AddButton color="secondary" />
            <AddButton shape="dot" />
            <AddButton shape="dot" size="sm" />
            <AddButton shape="dot" size="md" />
        </div>
    )
}

export default Test
