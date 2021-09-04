import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getInfo } from '../../Api/index'
import { Page, Flag, Icon, CountryName } from '../../Styles/Style'

const CountryPage = () => {
    const [country, setCountry] = useState(null)
    const x = useParams()

    const isAnchored = useSelector(({ anchoredStore: { data } }) => data.find((item) => item.name === x.name ? true : false))

    useEffect(async () => {
        setCountry(await getInfo(x.name))
    }, [])

    return (
        <Page>
            { country ?
                <>
                    <Flag src={country[0].flag} />
                    <CountryName>
                        <h2>{country[0].name}</h2>
                        {isAnchored ? <Icon>fixed</Icon> : ''}
                    </CountryName>
                    <p>{country[0].alpha3Code}</p>
                </>
                : ''
            }
        </Page>
    )
}



export default CountryPage