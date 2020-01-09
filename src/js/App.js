import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/e_pages/Home'
import FourOhFour from './components/e_pages/FourOhFour'

function App() {
    return (
        <>
            <Router>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route component={FourOhFour} />
                </Switch>
            </Router>
        </>
    )
}

export default App
