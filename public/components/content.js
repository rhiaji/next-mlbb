import React, { useState, useEffect } from 'react'
import CStyles from '../css/content.module.css'

const ContentMain = ({ searchQuery, show }) => {
    const [hero, setHero] = useState([])
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

    useEffect(() => {
        async function fetchHeroes() {
            setLoading(true)

            try {
                let response

                if (searchQuery === '') {
                    response = await fetch(`http://localhost:3000/api/heroes`)
                    if (response.ok) {
                        const data = await response.json()
                        setHeroes(data)
                    } else {
                        console.error('Failed to fetch heroes.')
                    }
                } else {
                    response = await fetch(`http://localhost:3000/api/hero?name=${searchQuery}`)
                    if (response.ok) {
                        const data = await response.json()
                        setHero(data)
                    } else {
                        console.error('Failed to fetch heroes.')
                    }
                }
            } catch (error) {
                console.error('Error:', error)
            }

            setLoading(false)
        }

        fetchHeroes()
    }, [searchQuery])

    return (
        <div className={CStyles.content}>
            <h3>Hero Lists</h3>
            {loading ? (
                <span className={CStyles.loader}></span>
            ) : (
                <div className={CStyles.heroList} style={{ display: show ? 'none' : 'flex' }}>
                    {heroes.map((hero) => (
                        <div className={CStyles.heroPlate} key={hero._id}>
                            <img src={`../images/heroes/${hero.heroName}.jpg`} className={CStyles.heroImage}></img>
                            <h4>{hero.heroName}</h4>
                            <div>
                                {hero.role.map((roles, index) => (
                                    <span key={index}>
                                        <img src={`../images/${roleImageMapping[roles]}`} className={CStyles.roleIcons}></img>
                                        {roles}
                                        {index < hero.role.length - 1 ? ' | ' : ''}
                                    </span>
                                ))}
                            </div>
                            <div>
                                Specialty:
                                {hero.specialty.map((Specialty, index) => (
                                    <span key={index}>
                                        {Specialty}
                                        {index < hero.specialty.length - 1 ? ' | ' : ' '}
                                    </span>
                                ))}
                            </div>
                            <p>Lane: {hero.lane}</p>
                            {/* Add more details here as needed */}
                        </div>
                    ))}
                </div>
            )}

            <div className={CStyles.heroOne} style={{ display: show ? 'flex' : 'none' }}>
                <div className={CStyles.heroPlate} key={hero._id}>
                    <img src={`../images/heroes/${hero.heroName}.jpg`}></img>
                    <h4>{hero.heroName}</h4>
                    <p>Role: {hero.role}</p>
                    <p>Specialty: {hero.specialty}</p>
                    <p>Lane: {hero.lane}</p>
                    {/* Add more details here as needed */}
                </div>
            </div>
        </div>
    )
}

export default ContentMain
