import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './CountryCard.module.css'
import { Card } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { anchorCountry, deleteCountry } from '../../Actions/ActionCreator'
import { Checkbox } from '@material-ui/core';

const CountryCard = ({ alpha3Code, name, flag, isAnchor }) => {
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const redirect = () => {
        history.push(`/country/${name}`)
    }

    const handleClose = (e) => {
        e.stopPropagation();
        dispatch(deleteCountry({alpha3Code, name}))
    }

    const handleCheckbox = (e) => {
        e.stopPropagation();
        dispatch(anchorCountry({name, alpha3Code, flag}))
    }

    const handleOn = () => {
        setIsHover(true)
    }

    const handleOut = () => {
        setIsHover(false)
    }

    return (
        <Card onClick={redirect} onMouseEnter={handleOn} onMouseLeave={handleOut} className={styles.cardBox}>
            <h2>{name}</h2>
            <p>{alpha3Code}</p>
            {isHover && isAnchor ? <div onClick={handleClose} className={styles.closeButton} > close </div> : ''}
            {isHover && !isAnchor ? <Checkbox onClick={handleCheckbox} className={styles.checkBox} /> : ''}
        </Card>
    )
}

export default CountryCard