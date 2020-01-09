import React from 'react'
import Logo from '../a_atoms/Logo'
import Hero from '../c_organisms/Hero'
import NavBar from '../c_organisms/NavBar'
import HomeGrid from '../c_organisms/HomeGrid'
function Home() {
    return (
        <>
            <NavBar></NavBar>
            <Hero>Welcome to ldk home</Hero>
            <HomeGrid></HomeGrid>
        </>
    )
}

export default Home
