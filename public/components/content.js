import React, { useState, useEffect } from 'react'
import CStyles from '../css/content.module.css'
require('dotenv').config()

const ContentMain = ({ searchQuery, show, setHeroSearch, onShow }) => {
    const [heroes, setHeroes] = useState([])
    const [loading, setLoading] = useState(false)

    const roleImageMapping = {
        Mage: '../images/roles/mage.png',
        Tank: '../images/roles/tank.png',
        Fighter: '../images/roles/fighter.png',
        Support: '../images/roles/support.png',
        Marksman: '../images/roles/marksman.png',
        Assassin: '../images/roles/assassin.png',
    }

    const heroSearch = (heroName) => {
        setHeroSearch(heroName)
        onShow(true)
    }

    useEffect(() => {
        async function fetchHeroes() {
            setLoading(true)

            try {
                const apiKey = '800d651324caccc0e9361858b5a0604d6a0ec30f1a4227417c3ca76868b448f5'

                const response = await fetch(`api/heroes`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': apiKey,
                    },
                })

                if (response.ok) {
                    const data = await response.json()
                    setHeroes(data)
                } else {
                    console.error('Failed to fetch heroes.')
                }
            } catch (error) {
                console.error('Error:', error)
            }

            setLoading(false)
        }

        fetchHeroes()
    }, [searchQuery])

    return (
        <div className={CStyles.content} style={{ display: show ? 'none' : 'flex' }}>
            {loading ? (
                <span className={CStyles.loader}></span>
            ) : (
                <div className={CStyles.heroList} style={{ display: show ? 'none' : 'flex' }}>
                    {heroes.map((hero) => (
                        <div className={CStyles.heroPlate} key={hero._id}>
                            <img src={`../images/heroes/${hero.heroName}.jpg`} className={CStyles.heroImage}></img>
                            <a
                                onClick={() => {
                                    heroSearch(hero.heroName)
                                }}
                            >
                                <h4>{hero.heroName}</h4>
                            </a>

                            {hero.role && hero.role.length > 0 ? (
                                <div>
                                    {hero.role.map((roles, index) => (
                                        <span key={index}>
                                            <img src={`../images/${roleImageMapping[roles]}`} className={CStyles.roleIcons} alt={roles}></img>
                                            {roles}
                                            {index < hero.role.length - 1 ? ' | ' : ''}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                'No Roles found'
                            )}

                            {hero.specialty && hero.specialty.length > 0 ? (
                                <div>
                                    Specialty:
                                    {hero.specialty.map((Specialty, index) => (
                                        <span key={index}>
                                            {Specialty}
                                            {index < hero.specialty.length - 1 ? ' | ' : ' '}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                'No specialties found'
                            )}
                            <p>Lane: {hero.lane}</p>
                            {/* Add more details here as needed */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ContentMain
