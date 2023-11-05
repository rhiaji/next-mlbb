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
                    <a href="/items" className={Styles.active}>
                        Items
                    </a>
                    <a href="/roles">Roles</a>
                    <a href="/update">Update</a>
                </nav>
            </header>
            <main>WELCOME TO ITEMS PAGE</main>
        </body>
    )
}
