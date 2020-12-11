import React from 'react'

import '../styles/Header.css'

export const Header = () => {
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

            <div className="signin-icon center">
                <i className="sign-out icon large"/>
            </div>

        </header>
    );
}