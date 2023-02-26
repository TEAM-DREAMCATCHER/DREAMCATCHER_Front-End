import React from 'react'
import styled, { css } from 'styled-components'

type ButtonSize = 'sm' | 'md' | 'lg'

const StyledBtn = styled.button`
    ${(props) => props.buttonStyle}
    width: var(--width);
    border: none;
    border-radius: 4px;
    background-color: var(--background-color);
    color: var(--color);
    padding: var(--padding);
    cursor: pointer;

    &:hover {
        opacity: var(--hover);
        text-decoration: var(--hover);
    }

    &[disabled] {
        cursor: default;
        opacity: 0.5;
        background: #dc3545 #025ce2;
    }
`

interface AddButtonProps {
    type: any
    disabled: boolean
    size: ButtonSize
    color: any
    children: React.ReactNode
    onClick: () => void
}

const AddButton = ({
    type,
    disabled,
    size = 'medium',
    color,
    children,
    onClick,
}: AddButtonProps) => {
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
