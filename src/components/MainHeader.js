import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainHeader.module.css'
const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                    <ul>
                        <NavLink to='/about' className={(navData) => navData.isActive ? classes.active : ''}>About</NavLink>
                        <NavLink to='/login' className={(navData) => navData.isActive ? classes.active : ''}>Login</NavLink>
                        <NavLink to='/product' className={(navData) => navData.isActive ? classes.active : ''}>products</NavLink>
                    </ul>
                
            </nav>
        </header>
    )
}

export default MainHeader
