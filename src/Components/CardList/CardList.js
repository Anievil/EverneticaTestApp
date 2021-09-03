import React from 'react'
import CountryCard from '../CountryCard/CountryCard'
import styles from './CardList.module.css'
import { useSelector } from 'react-redux'

function CardList() {
    const { anchoredStore: { data }, countriesStore: { allCountries } } = useSelector(store => store)

    return (
        <div className={styles.countriesCont}>
            {data.length !== 0 || allCountries
                ? <>
                    {data?.map(({ alpha3Code, name, flag }) => <CountryCard
                        className={' ',styles.anchored}
                        key={alpha3Code}
                        name={name}
                        alpha3Code={alpha3Code}
                        flag={flag}
                        isAnchor={true} />
                    )}
                    {allCountries?.map(({ alpha3Code, name, flag }) => <CountryCard
                        key={alpha3Code}
                        name={name}
                        alpha3Code={alpha3Code}
                        flag={flag}
                        isAnchor={false}
                        allCountries={allCountries} />
                    )}
                </>
                : <h2>Enter country name</h2>
            }
        </div>
    )
}

export default CardList 