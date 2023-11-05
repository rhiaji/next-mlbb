import React from 'react'
import SStyles from '../css/search.module.css'

const UpdateSearch = ({ onSearch }) => {
    const heroSearch = () => {
        const inputElement = document.getElementById('search')

        if (inputElement) {
            const heroName = inputElement.value
            onSearch(heroName)

            // Immediately trigger a search when the user clicks the button
            // This ensures that the new searchQuery is used right away
            // This additional call is not strictly necessary if the parent component updates quickly
            // It's added for immediate response to user input
            onSearch(heroName)
        }
    }

    return (
        <div className={SStyles.mainHeader}>
            <h2>Mobile Legends Dashboard</h2>
            <div className={SStyles.search}>
                <input type="text" id="search" name="search" placeholder="Enter Hero Name" />
                <button
                    type="button"
                    onClick={() => {
                        heroSearch()
                    }}
                >
                    Find
                </button>
            </div>
        </div>
    )
}

export default UpdateSearch
