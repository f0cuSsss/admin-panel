import React from 'react'
import { connect } from 'react-redux';

import '../styles/Header.css'
import { signOut } from '../actions/index'

const Header = (props) => {

    const onSignOutClick = () => {
        if(props.isSignedIn){
            props.signOut;
        }
    }

    return (
        <header>
            <span className="header-text center">Admin panel</span>

            <div className="detail center">
                <i className="users icon small"/>
                <span>1248</span>
            </div>

            <div className="detail center">
                <i className="eye icon small"/>
                <span>872</span>
            </div>

            <div className="signin-icon center" onClick={onSignOutClick}>
                <i className="sign-out icon large"/>
            </div>

        </header>
    );
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signOut })(Header);