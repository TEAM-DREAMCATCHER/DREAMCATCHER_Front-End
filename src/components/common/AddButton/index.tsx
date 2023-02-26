import React from 'react'
import styled, { css } from 'styled-components'
import PlusIcon from '../icons/PlusIcon'

type ButtonSize = 'sm' | 'md'
type ButtonColor = 'primary' | 'secondary' | 'none'

interface AddButtonProps {
    shape?: 'dot' | 'normal'
    disabled?: boolean
    size?: ButtonSize
    color?: ButtonColor
    onClick?: () => void
}

const AddButton = ({
    shape = 'normal',
    disabled,
    size = 'md',
    color = 'primary',
    onClick,
}: AddButtonProps) => {
    const dotShape = shape === 'dot' ? true : false

    return dotShape ? (
        <StyledBtn shape={dotShape} size={size} disabled={disabled} onClick={onClick} color="none">
            <PlusIcon shape="dot" />
        </StyledBtn>
    ) : (
        <StyledBtn shape={dotShape} size={size} disabled={disabled} onClick={onClick} color={color}>
            <PlusIcon shape="normal" />
        </StyledBtn>
    )
}

export default AddButton

const COLOR = {
    primary: css`
        background-color: #635273;
        background: conic-gradient(
            from 131.49deg at 51.11% 48.33%,
            #b9a1cf -37.5deg,
            #635273 176.25deg,
            #b9a1cf 322.5deg,
            #635273 536.25deg
        );
        opacity: 0.9;
    `,
    secondary: css`
        background-color: #464447;
        background: conic-gradient(
            from 131.49deg at 51.11% 48.33%,
            #868686 -37.5deg,
            #464447 176.25deg,
            #868686 322.5deg,
            #464447 536.25deg
        );
        opacity: 0.9;
    `,
    none: css`
        background-color: none;
    `,
}

const SIZE = {
    sm: css`
        width: 50px;
        height: 50px;
    `,
    md: css`
        width: 56px;
        height: 56px;
    `,
}

interface StyledBtnProps {
    shape: boolean
    color: ButtonColor
    size: ButtonSize
}

const StyledBtn = styled.button<StyledBtnProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;

    ${(props) => props.color && COLOR[props.color]}
    ${(props) => props.size && SIZE[props.size]}
    

    border-style: ${({ shape }) => (shape ? 'dotted' : 'none')};
    border-radius: 50%;
`
