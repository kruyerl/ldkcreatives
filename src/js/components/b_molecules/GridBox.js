import React from 'react'
import styled, {css} from 'styled-components'
import LogoSymbol from '../a_atoms/LogoSymbol'

const Container = styled.section`
    min-height: 320px;
    padding: ${props => props.theme.baseSize*2};
    ${props => props.color === "red" && css`
        background: ${props => props.theme.colors.brand.red};
    `}
    ${props => props.color === "grey" && css`
        background: ${props => props.theme.colors.grayscale.gray};
    `}
    ${props => props.color === "white" && css`
        background: ${props => props.theme.colors.grayscale.white};
    `}
    ${props => props.color === "yellow" && css`
        background: ${props => props.theme.colors.brand.yellow};
    `}

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

`
const H3 = styled.h3`
    margin: 0px;
`


const GridBox = ({ className, children,...restProps }) => {
    return (
        <Container className={className} {...restProps}>

            {children}
        </Container>
    )
}

export default GridBox
