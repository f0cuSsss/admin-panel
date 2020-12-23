import React from 'react'

import '../styles/Auth.css'
import logo from '../images/logo.png'

class Auth extends React.Component {

    render() {
        return (
            <div className="auth">
                <div className="auth-block">
                    <img alt="" src={logo}/>
                    <div className="field-block">
                        <div class="ui input">
                            <input placeholder="Login" />
                        </div>
                        <div class="ui input">
                            <input placeholder="Password" />
                        </div>
                    </div>

                    <div className="error-message"></div>

                    <div className="button">Sign in</div>
                </div>
            </div>
        );
    }
}

export default Auth;


