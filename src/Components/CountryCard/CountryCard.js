import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { anchorCountry, deleteFromAllCountry, deleteFromAnchorCountry } from '../../Actions/ActionCreator'
import { Checkbox } from '@material-ui/core';
import { CloseButton } from '../../Styles/Style'

const CountryCard = ({ alpha3Code, name, isAnchor }) => {
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const redirect = () => {
        history.push(`/country/${name}`)
    }

    const handleClose = (e) => {
        e.stopPropagation();
        dispatch(deleteFromAllCountry(name))
    }

    const handleCheckbox = (e) => {
        e.stopPropagation();
        if (!isAnchor) {
            dispatch(anchorCountry({ name, alpha3Code }))
        }
        else {
            dispatch(deleteFromAnchorCountry({ name, alpha3Code }))
        }
    }

    const handleOn = () => {
        setIsHover(true)
    }

    const handleOut = () => {
        setIsHover(false)
    }

    return (
        <Card onClick={redirect} onMouseEnter={handleOn} onMouseLeave={handleOut}>
            <h2>{name}</h2>
            <p>{alpha3Code}</p>
            {isHover
                ? <>
                    <CloseButton onClick={handleClose}> Delete </CloseButton>
                    <Checkbox style={{
                        position: 'absolute',
                        margin: 'auto',
                        right: '15px',
                        bottom: '10px',
                    }} onClick={handleCheckbox} checked={isAnchor} />
                </>
                : ''}
        </Card>
    )
}

export default CountryCard