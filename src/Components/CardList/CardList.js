import React from 'react'
import CountryCard from '../CountryCard/CountryCard'
import styles from './CardList.module.css'
import { useSelector } from 'react-redux'

function CardList() {
    const { anchoredStore: { data }, countriesStore: { filteredCountries } } = useSelector(store => store)

    return (
        <div className={styles.countriesCont}>
            {filteredCountries || data.length !== 0
                ? <>
                    {data?.map(({ alpha3Code, name }) => <CountryCard
                        key={alpha3Code}
                        name={name}
                        alpha3Code={alpha3Code}
                        isAnchor={true} />
                    )}
                    {filteredCountries?.map(({ alpha3Code, name }) => <CountryCard
                        key={alpha3Code}
                        name={name}
                        alpha3Code={alpha3Code}
                        isAnchor={false} />
                    )}
                </>
                : <h2>Enter country name</h2>
            }
        </div>
    )
}

export default CardList