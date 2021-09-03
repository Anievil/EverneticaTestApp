import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from './CountryPage.module.css'
import { getInfo } from '../../Api/index'

const CountryPage = () => {
    const [country, setCountry] = useState(null)
    const x = useParams()

    const isAnchored = useSelector(({ anchoredStore: {data} }) => data.find((item) => item.name === x.name ? true : false))
    console.log(x.name)

    useEffect(async () => {
        setCountry(await getInfo(x.name))
    }, [])

    return (
        <div className={styles.countryPage}>
            { country ?
                <>
                    <div className={styles.countryInfo}>
                        <img src={country[0].flag} alt='flag' className={styles.flag} />
                        <h2>{country[0].name}</h2>
                        <p>{country[0].alpha3Code}</p>
                    </div>
                    { isAnchored ? <h3 className={styles.fixCheck}>fixed</h3> : ''}
                </>
                : ''
            }
        </div>
    )
}

export default CountryPage