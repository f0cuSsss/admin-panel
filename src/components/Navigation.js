import React from 'react'

import '../styles/Navigation.css'
import logo from '../images/logo.png'
import { Item } from './navigation/Item'


export const Navigation = () => {
    return (
        <aside className="nav-grid">
            <img alt="" src={logo}/>
            <div>
                <Item icon="home" title="Main" />
                <Item icon="chart bar" title="Activity" />
                <Item icon="list" title="Ban-list" />
                <Item icon="tasks" title="Wishes" />
                <Item icon="paste" title="Reports" />
                <Item icon="archive" title="Archive" />
            </div>
        </aside>
    );
}
