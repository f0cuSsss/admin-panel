import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import '../styles/AdminPanel.css'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import Main from './contents/Main'
import Activity from './contents/Activity'
import Reports from './contents/Reports'
import Wishes from './contents/Wishes'
import BanList from './contents/BanList'
import Archive from './contents/Archive'

class AdminPanel extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="wrap">
                    <Header />

                    <Navigation />

                    <div>
                        <Route path="/" exact component={Main}/>
                        <Route path="/Activity" component={Activity}/>
                        <Route path="/Reports" component={Reports}/>
                        <Route path="/Wishes" component={Wishes}/>
                        <Route path="/Banlist" component={BanList}/>
                        <Route path="/archive" component={Archive}/>
                    </div>

                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default AdminPanel;