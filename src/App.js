import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import Lyrics from './components/Lyrics'
import { Provider } from './context'


const App = () => {
    return (

        <Provider>
            <Router>
                <React.Fragment>
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Showcase}  />
                            <Route exact path="/lyrics/:id" component={Lyrics}  />
                        </Switch>
                    </div>
                </React.Fragment> 
            </Router>
       </Provider>
    )
}

export default App
