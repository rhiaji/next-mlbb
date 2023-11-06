import React, { useState, useEffect } from 'react'
import CStyles from '../css/heroContent.module.css'

const HeroContent = ({ searchQuery, show, onHeroSearch }) => {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [hero, setHero] = useState([])
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

                if (searchQuery) {
                    response = await fetch(`api/hero?name=${searchQuery}`)
                    if (response.ok) {
                        const data = await response.json()
                        setHero(data)
                    } else {
                        console.error('Failed to fetch heroes.')
                    }
                } else if (onHeroSearch) {
                    response = await fetch(`api/hero?name=${onHeroSearch}`)
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
    }, [searchQuery, onHeroSearch])

    return (
        <div className={CStyles.content} style={{ display: show ? 'flex' : 'none' }}>
            {loading ? (
                <span className={CStyles.loader}></span>
            ) : (
                <div className={CStyles.heroOne} style={{ display: show ? 'flex' : 'none' }}>
                    <div className={CStyles.heroPlate} key={hero._id}>
                        <div className={CStyles.heroInformation}>
                            <img src={`../images/heroes/${hero.heroName}.jpg`} className={CStyles.heroImage}></img>
                            <h4>{hero.heroName}</h4>

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
                        <div className={CStyles.heroText}>
                            <div className={CStyles.textHeader}>
                                <button
                                    onClick={() => {
                                        setShow2(false)
                                        setShow3(false)
                                        setShow1(true)
                                    }}
                                >
                                    Counters
                                </button>
                                <button
                                    onClick={() => {
                                        setShow1(false)
                                        setShow3(false)
                                        setShow2(true)
                                    }}
                                >
                                    Strengths
                                </button>
                                <button
                                    onClick={() => {
                                        setShow1(false)
                                        setShow2(false)
                                        setShow3(true)
                                    }}
                                >
                                    Weakness
                                </button>
                            </div>
                            <div className={CStyles.againstContent} style={{ display: show1 ? 'flex' : 'none' }}>
                                <h4>Weak Against:</h4>
                                {hero.weakAgainst && hero.weakAgainst.length > 0 ? (
                                    <div>
                                        {hero.weakAgainst.map((enemies, index) => (
                                            <span key={index}>
                                                {enemies}
                                                {index < hero.weakAgainst.length - 1 ? ' | ' : ' '}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    'No enemies found'
                                )}
                                <h4>Strong Against:</h4>
                                {hero.strongAgainst && hero.strongAgainst.length > 0 ? (
                                    <div>
                                        {hero.strongAgainst.map((enemies, index) => (
                                            <span key={index}>
                                                {enemies}
                                                {index < hero.strongAgainst.length - 1 ? ' | ' : ' '}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    'No enemies found'
                                )}
                                <h4>Item Counter:</h4>
                                {hero.itemsCounter && hero.itemsCounter.length > 0 ? (
                                    <div>
                                        {hero.itemsCounter.map((items, index) => (
                                            <span key={index}>
                                                {items}
                                                {index < hero.itemsCounter.length - 1 ? ' | ' : ' '}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    'No items found'
                                )}
                                <h4>Tips:</h4>
                                {hero.tipsCounter && hero.tipsCounter.length > 0 ? (
                                    <div className={CStyles.lists}>
                                        {hero.tipsCounter.map((tips, index) => (
                                            <li key={index}>{tips}</li>
                                        ))}
                                    </div>
                                ) : (
                                    'No items found'
                                )}
                            </div>
                            <div className={CStyles.strengthContent} style={{ display: show2 ? 'flex' : 'none' }}>
                                <h4>Hero Strengths:</h4>
                                {hero.strengthCounter && hero.strengthCounter.length > 0 ? (
                                    <div className={CStyles.lists}>
                                        {hero.strengthCounter.map((heroStrength, index) => (
                                            <div key={index}>
                                                <li>{heroStrength}</li>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    'No Strengths found'
                                )}
                            </div>
                            <div className={CStyles.weaknessContent} style={{ display: show3 ? 'flex' : 'none' }}>
                                <h4>Hero Weaknesses:</h4>
                                {hero.weaknessCounter && hero.weaknessCounter.length > 0 ? (
                                    <div className={CStyles.lists}>
                                        {hero.weaknessCounter.map((heroWeakness, index) => (
                                            <div key={index}>
                                                <li>{heroWeakness}</li>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    'No Weaknesses found'
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HeroContent
