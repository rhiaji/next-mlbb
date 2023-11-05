import React, { useState, useEffect } from 'react'
import CStyles from '../css/update.module.css'

const UpdateContent = ({ searchQuery }) => {
    const [hero, setHero] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchHeroes() {
            setLoading(true)

            try {
                let response

                response = await fetch(`api/hero?name=${searchQuery}`)
                if (response.ok) {
                    const data = await response.json()
                    setHero(data)
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
        <div className={CStyles.content}>
            <h3>Hero Lists</h3>
            <div className={CStyles.updateContent}>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className={CStyles.heroOne}>
                        <div className={CStyles.heroPlate} key={hero._id}>
                            <img src={`../images/${hero.heroName}.jpg`}></img>
                            <h4>{hero.heroName}</h4>
                            <p>Role: {hero.role}</p>
                            <p>Specialty: {hero.specialty}</p>
                            <p>Lane: {hero.lane}</p>
                            <p>Weak Against:</p>
                            <p>
                                {hero.weakAgainst && hero.weakAgainst.length > 0
                                    ? hero.weakAgainst.map((enemy, index) => (
                                          <span key={index}>
                                              {enemy}
                                              {index < hero.weakAgainst.length - 1 ? ', ' : ''}
                                          </span>
                                      ))
                                    : 'No weak enemies found'}
                            </p>
                            <p>Strong Against:</p>
                            <p>
                                {hero.strongAgainst && hero.strongAgainst.length > 0
                                    ? hero.strongAgainst.map((enemy, index) => (
                                          <span key={index}>
                                              {enemy}
                                              {index < hero.strongAgainst.length - 1 ? ', ' : ''}
                                          </span>
                                      ))
                                    : 'No weak enemies found'}
                            </p>
                            <p>Items Counter:</p>
                            {hero.itemsCounter && hero.itemsCounter.length > 0 ? (
                                <ul>
                                    {hero.itemsCounter.map((tip, index) => (
                                        <li key={index}>{tip}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No items available.</p>
                            )}
                            <p>Tips Counter:</p>
                            {hero.tipsCounter && hero.tipsCounter.length > 0 ? (
                                <ul>
                                    {hero.tipsCounter.map((tip, index) => (
                                        <li key={index}>{tip}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No tips available.</p>
                            )}

                            <p>Strengths:</p>
                            {hero.strengthCounter && hero.strengthCounter.length > 0 ? (
                                <ul>
                                    {hero.strengthCounter.map((strength, index) => (
                                        <li key={index}>{strength}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No strengths available.</p>
                            )}

                            <p>Weaknesses:</p>
                            {hero.weaknessCounter && hero.weaknessCounter.length > 0 ? (
                                <ul>
                                    {hero.weaknessCounter.map((weakness, index) => (
                                        <li key={index}>{weakness}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No weaknesses available.</p>
                            )}

                            {/* Add more details here as needed */}
                        </div>
                    </div>
                )}
                <div className={CStyles.heroOne}>
                    <div className={CStyles.heroPlate} key={hero._id}>
                        <img src={`../images/${hero.heroName}.jpg`}></img>
                        <h4>{hero.heroName}</h4>
                        <p>Role: {hero.role}</p>
                        <p>Specialty: {hero.specialty}</p>
                        <p>Lane: {hero.lane}</p>
                        <p>Weak Against:</p>
                        <p>
                            {hero.weakAgainst && hero.weakAgainst.length > 0
                                ? hero.weakAgainst.map((enemy, index) => (
                                      <span key={index}>
                                          {enemy}
                                          {index < hero.weakAgainst.length - 1 ? ', ' : ''}
                                      </span>
                                  ))
                                : 'No weak enemies found'}
                        </p>
                        <p>Strong Against:</p>
                        <p>
                            {hero.strongAgainst && hero.strongAgainst.length > 0
                                ? hero.strongAgainst.map((enemy, index) => (
                                      <span key={index}>
                                          {enemy}
                                          {index < hero.strongAgainst.length - 1 ? ', ' : ''}
                                      </span>
                                  ))
                                : 'No weak enemies found'}
                        </p>
                        <p>Items Counter:</p>
                        {hero.itemsCounter && hero.itemsCounter.length > 0 ? (
                            <ul>
                                {hero.itemsCounter.map((tip, index) => (
                                    <li key={index}>{tip}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No items available.</p>
                        )}
                        <p>Tips Counter:</p>
                        {hero.tipsCounter && hero.tipsCounter.length > 0 ? (
                            <ul>
                                {hero.tipsCounter.map((tip, index) => (
                                    <li key={index}>{tip}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No tips available.</p>
                        )}

                        <p>Strengths:</p>
                        {hero.strengthCounter && hero.strengthCounter.length > 0 ? (
                            <ul>
                                {hero.strengthCounter.map((strength, index) => (
                                    <li key={index}>{strength}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No strengths available.</p>
                        )}

                        <p>Weaknesses:</p>
                        {hero.weaknessCounter && hero.weaknessCounter.length > 0 ? (
                            <ul>
                                {hero.weaknessCounter.map((weakness, index) => (
                                    <li key={index}>{weakness}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No weaknesses available.</p>
                        )}

                        {/* Add more details here as needed */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateContent
