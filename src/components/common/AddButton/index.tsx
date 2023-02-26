import React from 'react'
import styled, { css } from 'styled-components'

type ButtonSize = 'sm' | 'md' | 'lg'

interface AddButtonProps {
    type: any
    disabled: boolean
    size: ButtonSize
    color: any
    children: React.ReactNode
    onClick: () => void
}

const AddButton = ({ type, disabled, color, children, onClick }: AddButtonProps) => {
    //const buttonStyle = BUTTON_STYLE[styles]
    //const sizeStyle = SIZES[size]
    //const variantStyle = COLORS[color]

    return (
        <StyledBtn type={type} disabled={disabled} onClick={onClick}>
            {children}
        </StyledBtn>
    )
}

export default AddButton

const StyledBtn = styled.button``
