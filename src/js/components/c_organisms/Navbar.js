import React from 'react'
import styled from 'styled-components'
import LogoSymbol from '../a_atoms/LogoSymbol'
import { rgba, linearGradient } from 'polished'

const MainNav = styled.nav`
    padding:  ${props => props.theme.baseSize * 2};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;

`
const H3 = styled.h2`
    margin: 0px;
`
function Nav() {
    return (
        <MainNav>

            <LogoSymbol></LogoSymbol>
            <H3>@ # %</H3>
        </MainNav>
    )
}

export default Nav
