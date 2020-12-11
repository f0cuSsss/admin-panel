import React from 'react'

import '../styles/Navigation.css'
import logo from '../images/logo.png'


export const Navigation = () => {
    return (
        <aside className="nav-grid">

            <img alt="" src={logo}/>

            <div>
                <div class="item nav-item" >
                    <i className="chart bar icon large" />
                    <div 
                        className="middle aligned content" >
                            Activity
                    </div>
                </div>

                <div className="item nav-item" >
                    <i className="list icon large" />
                    <div 
                        className="middle aligned content" >
                            Ban-list
                    </div>
                </div>

                <div className="item nav-item" >
                    <i className="tasks icon large" />
                    <div 
                        className="middle aligned content" >
                            Wishes
                    </div>
                </div>

                <div className="item nav-item" >
                    <i className="paste icon large" />
                    <div 
                        className="middle aligned content" >
                            Reports
                    </div>
                </div>

                <div className="item nav-item" >
                    <i className="archive icon large" />
                    <div 
                        className="middle aligned content" >
                            Archive
                    </div>
                </div>
            </div>
        </aside>
    );
}
