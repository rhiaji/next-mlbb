'use client'
import React, { useState } from 'react'
import Styles from './page.module.css'
import SearchMain from '../../public/components/search'
import ContentMain from '../../public/components/content'
import HeroContent from '../../public/components/heroContent'

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('')
    const [heroSearch, setHeroSearch] = useState('')
    const [show, setShow] = useState(false)

    return (
        <body>
            <main>
                {/* Pass an object with properties as props */}
                <SearchMain onSearch={setSearchQuery} onShow={setShow} />
                <ContentMain searchQuery={searchQuery} setHeroSearch={setHeroSearch} show={show} onShow={setShow} />
                <HeroContent searchQuery={searchQuery} onHeroSearch={heroSearch} show={show} />
            </main>
        </body>
    )
}
