import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import AdminPanel from './AdminPanel'
import Auth from './Auth'

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={AdminPanel} />
                <Route path="/dashboard" component={AdminPanel} />
                <Route path="/signin" component={Auth} />
            </div>
        </BrowserRouter>
    );
}