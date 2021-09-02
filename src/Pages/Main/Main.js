import React from 'react'
import SearchForm from '../../Components/SearchForm/SearchForm'
import CardList from '../../Components/CardList/CardList'
import styles from './Main.module.css'
import { getInfo } from '../../Api/index'
import { useDispatch } from 'react-redux'
import { saveAllCountries } from '../../Actions/ActionCreator'

const Main = () => {
    const dispatch = useDispatch()

    const searchCountry = async (e) => {
        e.preventDefault()
        console.log(e.target.value)
        const data = await getInfo(e.target.value)
        dispatch(saveAllCountries(data !== 'err' ? data : null))
    }

    return (
        <div>
            <SearchForm searchCountry={searchCountry} />
            <CardList />
        </div>
    )
}

export default Main