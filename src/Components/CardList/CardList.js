import React from 'react'
import CountryCard from '../CountryCard/CountryCard'
import { useSelector } from 'react-redux'
import { CountryCont } from '../../Styles/Style'

function CardList() {
    const { anchoredStore: { data }, countriesStore: { filteredCountries } } = useSelector(store => store)

    return (
        <CountryCont>
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
        </CountryCont>
    )
}

export default CardList