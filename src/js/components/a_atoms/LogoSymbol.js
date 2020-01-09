import React from 'react'
import styled from 'styled-components'

import LogoVector from '../../../assets/imgs/logos/logo.svg'

const Obj = styled.object`
    pointer-events: none;
    max-width:100%;
`
const LogoSymbol = () => {

    return (
        <a href="/">
            <Obj data={LogoVector} type="image/svg+xml">
                <img src={LogoVector} />
            </Obj>
        </a>
    )

}

export default LogoSymbol
