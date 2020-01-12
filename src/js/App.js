import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/e_pages/Home'
import FourOhFour from './components/e_pages/FourOhFour'
import NavBar from './components/c_organisms/Navbar'
import Footer from './components/c_organisms/Footer'

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route component={FourOhFour} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App
