import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/layouts/LandingPage'
import NotFound from './components/layouts/NotFound'

function App() {
    return (
        <>
            <Router>

                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    )
}

export default App
