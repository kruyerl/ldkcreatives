import React from 'react'
import styled, {css} from 'styled-components'
import LogoSymbol from '../a_atoms/LogoSymbol'
import { rgba } from 'polished'
import GridBox from '../b_molecules/GridBox'
import Anchor from '../a_atoms/Anchor'

const Container = styled.section`
    background-color: ${props => props.theme.colors.grayscale.black};

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-template-areas:
        "intro  caseStudy1"
        "intro caseStudy1"
        "caseStudy2 caseStudy1"
        "caseStudy2 capabilities"
        "caseStudy3 blog"
        "engagement blog"
        "engagement cta";
    @media (max-width: ${props => props.theme.screens.tablet}) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(8, 1fr);
        grid-template-areas:
            "intro"
            "caseStudy1"
            "caseStudy2"
            "capabilities"
            "caseStudy3"
            "blog"
            "engagement"
            "cta";
  }
`

const GridBoxItem = styled(GridBox)`
    grid-area: ${props => props.area};
`




function HomeGrid() {
    return (
        <Container>
            <GridBoxItem area="intro" color="red">
                <h1>We drive meaningful connections between brands and their users.</h1>
                <Anchor white href="#">Find out how we do it</Anchor>
            </GridBoxItem>
            <GridBoxItem area="caseStudy1" color="grey">

                <h2>Increased Currant user engagement by 50%</h2>
                <Anchor primary href="#">View case study</Anchor>

            </GridBoxItem>
            <GridBoxItem area="caseStudy2" color="white"><h2>Increased Currant user engagement by 50%</h2>
                <Anchor primary href="#">View case study</Anchor></GridBoxItem>
            <GridBoxItem area="caseStudy3" color="grey"><h2>Increased Currant user engagement by 50%</h2>
                <Anchor primary href="#">View case study</Anchor></GridBoxItem>
            <GridBoxItem area="capabilities" color="yellow"><h1>Capabilities</h1></GridBoxItem>
            <GridBoxItem area="blog" color="white"><h2>Shiny Object Syndrome & why its hurting your business</h2>
                <Anchor primary href="#">Read Article</Anchor>


            </GridBoxItem>
            <GridBoxItem area="engagement" color="red"><h1>Engagement</h1>
                <Anchor white href="#">Find out how we do it</Anchor></GridBoxItem>
            <GridBoxItem area="cta" color="yellow"><h1>Call to Action</h1></GridBoxItem>
        </Container>
    )
}

export default HomeGrid
