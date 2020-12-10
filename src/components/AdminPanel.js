import React from 'react'

import '../styles/AdminPanel.css'
import { Header } from './Header'
import { Navigation } from './Navigation'
import Content from './Content'
import { Footer } from './Footer'

class AdminPanel extends React.Component {

    render() {
        return (
            <div className="wrap">
                <Header />

                <Navigation />

                <Content />

                <Footer />
            </div>
        );
    }
}

export default AdminPanel;