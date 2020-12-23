import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

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
import NeedSignIn from './contents/NeedSignIn'

class AdminPanel extends React.Component {

    getContent() {
        if(this.props.isSignedIn){
            return (
                <div>
                    <Route path="/" exact component={Main}/>
                    <Route path="/Activity" component={Activity}/>
                    <Route path="/Reports" component={Reports}/>
                    <Route path="/Wishes" component={Wishes}/>
                    <Route path="/Banlist" component={BanList}/>
                    <Route path="/archive" component={Archive}/>
                </div>
            );
        }
        else{
            return (
                <div>
                    <NeedSignIn />
                </div>
            )
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="wrap">
                    <Header />

                    <Navigation />

                    {this.getContent()}

                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps)(AdminPanel);