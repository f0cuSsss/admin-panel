import React from 'react'

import '../styles/Navigation.css'
import logo from '../images/logo.png'
import { Item } from './navigation/Item'


export const Navigation = () => {
    return (
        <aside className="nav-grid">
            <img alt="" src={logo}/>
            <div>
                <Item icon="home" title="Main" to="/dashboard/" />
                <Item icon="chart bar" title="Activity" to="/dashboard/activity" />
                <Item icon="list" title="Ban-list" to="/dashboard/banlist" />
                <Item icon="tasks" title="Wishes" to="/dashboard/wishes" />
                <Item icon="paste" title="Reports" to="/dashboard/reports" />
                <Item icon="archive" title="Archive" to="/dashboard/archive" />
            </div>
        </aside>
    );
}
