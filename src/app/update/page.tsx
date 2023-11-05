'use client'
import React, { useState } from 'react'
import Styles from '../page.module.css'
import UpdateSearch from '../../../public/components/UpdateSearch'
import UpdateContent from '../../../public/components/update'

export default function update() {
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <body>
            <header>
                <div className={Styles.logo}>Logo Here</div>
                <nav>
                    <a href="/">Heroes</a>
                    <a href="/items">Items</a>
                    <a href="/roles">Roles</a>
                    <a href="/update" className={Styles.active}>
                        Update
                    </a>
                </nav>
            </header>
            <main>
                {/* Pass an object with properties as props */}
                <UpdateSearch onSearch={setSearchQuery} />
                <UpdateContent searchQuery={searchQuery} />
            </main>
        </body>
    )
}
