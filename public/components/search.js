import React from 'react'
import SStyles from '../css/search.module.css'

const SearchMain = ({ onSearch, onShow }) => {
    const heroSearch = () => {
        const inputElement = document.getElementById('search')

        if (inputElement) {
            const heroName = inputElement.value

            if (heroName.trim() !== '') {
                // Only trigger a search if the input is not empty or only contains whitespace
                onSearch(heroName)
                onShow(true)
            }
            // You can also do something else if the input is empty, if needed.
        }
    }

    const findAll = () => {
        const inputElement = document.getElementById('search')

        inputElement.value = ''
        onShow(false)
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
                <button
                    type="button"
                    onClick={() => {
                        findAll()
                    }}
                >
                    Find All
                </button>
            </div>
        </div>
    )
}

export default SearchMain
