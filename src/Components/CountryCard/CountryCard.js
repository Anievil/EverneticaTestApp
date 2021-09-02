import React from 'react'
import styles from './CountryCard.module.css'
import { Card } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const CountryCard = ({ code, name }) => {
    console.log(code, name)

    return (
        <NavLink className={styles.link} to={`/country/${name}`}>
            <Card className={styles.cardBox}>
                <h2>{name}</h2>
                <p>{code}</p>
            </Card>
        </NavLink>
    )
}

export default CountryCard