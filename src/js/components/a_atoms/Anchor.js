import React from 'react'
import styled, {css} from 'styled-components'
import LogoSymbol from '../a_atoms/LogoSymbol'
import { rgba } from 'polished'

const A = styled.a`
    ${props => props.primary && css`
        color: ${props.theme.colors.brand.red};


    `}
    ${props => props.secondary && css`
        color: ${props.theme.colors.brand.yellow};

    `}
    ${props => props.black && css`
        color: ${props.theme.colors.grayscale.black};

    `}
    ${props => props.white && css`
        color: ${props.theme.colors.grayscale.white};

    `}

    &:hover{
        text-decoration: underline solid Currentcolor;

    }

`
const Anchor = ({className, children, color, ...restProps}) => {
    return (
        <A className={className} color={color} {...restProps}>
            {children}
        </A>
    )
}

export default Anchor
