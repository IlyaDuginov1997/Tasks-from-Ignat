import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from './HW5.module.css'

function Header() {
    return (
        <div className={styles.navBar}>
            <NavLink to={'/pre-junior'}> Pre-junior </NavLink>
            <NavLink to={'/junior'}> Junior </NavLink>
            <NavLink to={'/junior-plus'}> Junior-plus </NavLink>
        </div>
    )
}

export default Header
