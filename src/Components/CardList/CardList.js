import React from 'react'
import CountryCard from '../CountryCard/CountryCard'
import styles from './CardList.module.css'
import { useSelector } from 'react-redux'

function CardList() {
    const { allCountries, fixedCountries } = useSelector(store => store)

    console.log(allCountries)
    console.log(fixedCountries)
    return (
        <div className={styles.countriesCont}>
            {allCountries
                ? allCountries.map(({ alpha3Code, name }) => <CountryCard key={alpha3Code} name={name} code={alpha3Code} />)
                : <h2>Enter country name</h2>
            }
        </div>
    )
}

export default CardList