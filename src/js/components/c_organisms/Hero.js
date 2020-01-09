import React from 'react'
import styled from 'styled-components'
import Logo from '../a_atoms/Logo'

const Header = styled.header`
    padding:  ${props => props.theme.baseSize * 2};
    min-height: 720px;
    background-color: ${props => props.theme.colors.grayscale.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Descriptor = styled.h4`
margin-top:  ${props => props.theme.baseSize * 2};
text-align: center;`

const HeroLogo = styled(Logo)``


const Hero = () => {

    return (
        <Header>
            <HeroLogo></HeroLogo>
            <Descriptor>We’re a Brand Experience Consultancy</Descriptor>
        </Header>

    )

}

export default Hero
