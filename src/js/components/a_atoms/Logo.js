import React from 'react'
import styled from 'styled-components'

import LogoVector from '../../../assets/imgs/logos/BigLogo.svg'

const Obj = styled.object`
    pointer-events: none;
    max-width:100%;
`
const Logo = () => {

    return (
        <a href="/">
            <img src={LogoVector} />
        </a>
    )

}

export default Logo
