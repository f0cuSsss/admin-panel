import React from 'react'
import { Link } from 'react-router-dom'

const NeedSignIn = () => {
    return (
        <div style={{ textAlign: 'center'}}>
            <h2 style={{ color: 'black' }}>
                You need <Link to="/signin"> Sign in</Link>
            </h2>    
        </div>
    );
}

export default NeedSignIn;