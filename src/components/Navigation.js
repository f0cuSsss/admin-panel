import React from 'react'

import '../styles/Navigation.css'
import logo from '../images/logo.png'


export const Navigation = () => {
    return (
        <aside class="nav-grid">

            <img alt="" src={logo}/>

            <div>
                <div class="item nav-item" >
                    <i className="chart bar icon large" />
                    <div 
                        class="middle aligned content" >
                            Activity
                    </div>
                </div>

                <div class="item nav-item" >
                    <i className="list icon large" />
                    <div 
                        class="middle aligned content" >
                            Ban-list
                    </div>
                </div>

                <div class="item nav-item" >
                    <i className="tasks icon large" />
                    <div 
                        class="middle aligned content" >
                            Wishes
                    </div>
                </div>

                <div class="item nav-item" >
                    <i className="paste icon large" />
                    <div 
                        class="middle aligned content" >
                            Reports
                    </div>
                </div>

                <div class="item nav-item" >
                    <i className="archive icon large" />
                    <div 
                        class="middle aligned content" >
                            Archive
                    </div>
                </div>
            </div>
        </aside>
    );
}
