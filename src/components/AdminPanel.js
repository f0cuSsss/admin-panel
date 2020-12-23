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
                    <Route path="/dashboard/" exact component={Main}/>
                    <Route path="/dashboard/Activity" exact component={Activity}/>
                    <Route path="/dashboard/Reports" exact component={Reports}/>
                    <Route path="/dashboard/Wishes" exact component={Wishes}/>
                    <Route path="/dashboard/Banlist" exact component={BanList}/>
                    <Route path="/dashboard/archive" exact component={Archive}/>
                </div>
            );
        }
        else{
            return (
                <div>
                    <NeedSignIn />
                </div>
            );
        }
    }

    render() {
        return (
            <div className="wrap">
                <Header />

                <Navigation />

                {this.getContent()}

                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps)(AdminPanel);