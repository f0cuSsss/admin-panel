import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ icon, title, to }) => {
    return (
        <Link to={to} className="item nav-item" >
            <i className={`${icon} icon large`} />
            <div className="middle aligned content" >
                {title}
            </div>
        </Link>
    );
}