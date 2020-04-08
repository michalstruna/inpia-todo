import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import App from './Core/Components/App'
import { Url } from './Utils'
import { HomeView } from './Todo'

ReactDOM.render(
    <React.StrictMode>
        <App>
            <Router>
                <Switch>
                    <Route exact path={Url.HOME} component={HomeView} />
                </Switch>
            </Router>
        </App>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()