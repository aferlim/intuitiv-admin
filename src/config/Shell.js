import React from 'react'
import Routes from './Routes'
import { Link } from 'react-router-dom'

const Shell = (props) => (
    <div>
        <h1>Shell</h1>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Routes />
    </div>
)

export default Shell
