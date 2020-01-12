import { createGlobalStyle } from 'styled-components'
import modernNormalize from 'styled-modern-normalize'
import { rgba } from 'polished'

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Work+Sans:400,700,900&display=swap');
/* ###
    Normalize
### */


${modernNormalize}


/* ###
    Typography
### */

    h1, h2, h3, h4, h5, p, small, a {
        color: ${props => props.theme.colors.grayscale.black};
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        margin-top: 0px;
        word-break: break-word;
        max-width: 600px;
    }

    h1 {
        font-family: ${props => props.theme.fonts.primary};
        font-size: 48px;
        line-height: 1.5;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 900;
    }
    h2 {
        font-family: ${props => props.theme.fonts.primary};
        font-size: 32px;
        line-height: 1.5;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 700;
    }
    h3 {
        font-family: ${props => props.theme.fonts.primary};
        font-size: 28px;
        line-height: 1.5;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 900;
    }
    h4 {
        font-family: ${props => props.theme.fonts.primary};
        font-size: 22px;
        line-height: 1.5;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 700;
    }
    h5 {
        font-family: ${props => props.theme.fonts.primary};
        font-size: 20px;
        line-height: 1.5;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 900;
    }
    Body, p {
        font-family: ${props => props.theme.fonts.primary};
        font-size: ${props => props.theme.baseSize};
        line-height: 1.4;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 400;
    }
    a {
        font-family: ${props => props.theme.fonts.primary};
        font-weight: 400;
        text-decoration: none;
        transition: text-decoration 300ms ease;
        text-decoration: underline solid transparent;

    }

    small, .caption {
        font-family: ${props => props.theme.fonts.primary};
        font-size: 16px;
        line-height: 1.4;
        margin-bottom:${props => props.theme.baseSize};
        font-weight: 400;
    }

/* ###
    SelectionColors
### */

::selection{
  background: ${props => rgba(props.theme.colors.brand.red, 0.6)};
}
img::selection{
  background: transparent;
}


body{
 background-color: ${props => props.theme.colors.grayscale.grey};
 font-size: ${props => props.theme.baseSize};      margin-bottom: 0px;
}


* {
    box-sizing: border-box;
}

`
