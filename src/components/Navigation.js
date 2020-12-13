import React from 'react'

import '../styles/Navigation.css'
import logo from '../images/logo.png'
import { Item } from './navigation/Item'


export const Navigation = () => {
    return (
        <aside className="nav-grid">
            <img alt="" src={logo}/>
            <div>
                <Item icon="home" title="Main" to="/" />
                <Item icon="chart bar" title="Activity" to="/activity" />
                <Item icon="list" title="Ban-list" to="/banlist" />
                <Item icon="tasks" title="Wishes" to="/wishes" />
                <Item icon="paste" title="Reports" to="/reports" />
                <Item icon="archive" title="Archive" to="/archive" />
            </div>
        </aside>
    );
}
