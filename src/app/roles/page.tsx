'use client'
import React from 'react'
import Styles from '../page.module.css'

export default function update() {
    return (
        <body>
            <header>
                <div className={Styles.logo}>Logo Here</div>
                <nav>
                    <a href="/">Heroes</a>
                    <a href="/items">Items</a>
                    <a href="/roles" className={Styles.active}>
                        Roles
                    </a>
                    <a href="/update">Update</a>
                </nav>
            </header>
            <main>WELCOME TO ROLES PAGE</main>
        </body>
    )
}
