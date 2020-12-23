import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import '../styles/Auth.css'
import logo from '../images/logo.png'
import { signIn } from '../actions'

class Auth extends React.Component {

    onSignInClick() {

    }
    
    render() {
        
        if(this.props.isSignedIn){
            return (
                <div className="auth">
                    <div className="auth-block">
                        <img alt="" src={logo}/>
                        <h2>You signed in</h2>
                        <div className="button">
                            <Link to="/dashboard/">
                                <div className="singedin-nav">
                                    Dashboard
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className="auth">
                    <div className="auth-block">
                        <img alt="" src={logo}/>
                        <div className="field-block">
                            <div className="ui input">
                                <input placeholder="Login" />
                            </div>
                            <div className="ui input">
                                <input placeholder="Password" />
                            </div>
                        </div>
                        <div className="error-message"></div>
                        <div className="button" onClick={() => this.props.signIn()}>Sign in</div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn })(Auth);


