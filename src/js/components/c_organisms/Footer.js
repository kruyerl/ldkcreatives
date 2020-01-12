import React from 'react'
import styled, {css} from 'styled-components'
import LogoSymbol from '../a_atoms/LogoSymbol'
import { rgba, linearGradient } from 'polished'
import Logo from '../a_atoms/Logo'
import WhiteLogo from '../../../assets/imgs/logos/whiteLogoSymbol.svg'
import { Link } from "react-router-dom";
const MainFooter = styled.footer`
    padding:  ${props => props.theme.baseSize * 8} ${props => props.theme.baseSize * 2} ${props => props.theme.baseSize * 2} ${props => props.theme.baseSize * 2};
    min-height: 320px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    background-color: ${props => props.theme.colors.grayscale.black};
    * {
        color: ${props => rgba(props.theme.colors.grayscale.white, 1)};
    }
    object > svg > path{
        fill: red;
    }
    a{
        transition: color 300ms ease-in-out;
&:hover{
    color: ${props => rgba(props.theme.colors.brand.red, 1)};
}
    }

`

const MailToLink = styled.h2`
    margin: 0px 0px ${props => props.theme.baseSize * 2} 0px;
    position: relative;
    z-index: 500;
    transition: background-color 300ms ease;
    cursor: pointer;
    transition: color 300ms ease;
    &:hover{
        color: ${props => props.theme.colors.grayscale.black};
        &::after {
            max-height: 100%;
            background-color: ${props => props.theme.colors.brand.yellow};
        }

    }
    &::before {
        content: "hello@ldkcreatives.com";
        position: inherit;
        z-index: 100;
        transition: color 300ms ease;
    }
    &::after {
        content: "";
        position: absolute;
        width: 101%;
        background-color: ${props => rgba(props.theme.colors.brand.yellow, 1)};
        height: 100%;
        max-height: 2px;
        bottom: 0px;
        left: 0px;
        transition: all 300ms ease-in-out;
    }
`

const Contact = styled.section`
display: flex;
flex-wrap: wrap;
margin: 0 auto;
width: 100%;
justify-content: space-between;
margin-bottom: ${props => props.theme.baseSize * 6};

`
const CTA = styled.div`margin-right: ${props => props.theme.baseSize * 2}; `
const Details = styled.div`
    width: 100%;
    max-width: 400px;
`
const Links = styled.div`
display: flex;
margin: 0 auto;
width: 100%;
justify-content: space-between;
flex-wrap: wrap-reverse;

`
const LinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 400px;
    ul{
        padding-left: 0px;
        list-style: none;
        margin-top: 0px;
        margin-right:${props => props.theme.baseSize * 2};
        li{
            margin-bottom:${props => props.theme.baseSize / 2};
        }
    }
`
const FooterLogo = styled.img`
    align-self: flex-end;
    margin-right:${props => props.theme.baseSize * 3};
`
const FooterLink = styled(Link)`
transition: color 300ms ease-in-out;
&:hover{
    color: ${props => rgba(props.theme.colors.brand.red, 1)};
}
`
function Footer() {
    return (
        <MainFooter>
            <Contact>
                <CTA>
                    <h1>Let's Talk.</h1>
                    <a href="mailto:ldkcreatives@gmail.com"><MailToLink> </MailToLink></a>
                </CTA>
                <Details>
                    <p>@ldkcreatives</p>
                    <p>+27 (0)61 068 2799</p>
                    <p>50 Lente St, <br></br>Kirstenhof, Cape Town</p>
                </Details>

            </Contact>
            <Links>
                <Link to="/"><FooterLogo src={WhiteLogo}></FooterLogo></Link>
                <LinksContainer>
                    <ul>
                        <li><FooterLink to='/About'>About</FooterLink></li>
                        <li><FooterLink to='/Articles'>Articles</FooterLink></li>
                        <li><FooterLink to='/CaseStudies'>Case Studies</FooterLink></li>
                    </ul>
                    <ul>
                        <li><a target="_blank" href="https://dribbble.com/">Dribbble</a></li>
                        <li><a target="_blank" href="https://instagram.com/">Instagram</a></li>
                        <li><a target="_blank" href="https://twitter.com/">Twitter</a></li>
                    </ul>
                </LinksContainer>
            </Links>


        </MainFooter>
    )
}

export default Footer
