import React from 'react'

export const Item = ({ icon, title }) => {
    return (
        <div className="item nav-item" >
            <i className={`${icon} icon large`} />
            <div className="middle aligned content" >
                {title}
            </div>
        </div>
    );
}