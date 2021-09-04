import React, { useEffect } from 'react'
import SearchForm from '../../Components/SearchForm/SearchForm'
import CardList from '../../Components/CardList/CardList'
import { getAllInfo } from '../../Api/index'
import { useDispatch } from 'react-redux'
import { saveAllCountries, filterCountries } from '../../Actions/ActionCreator'

const Main = () => {
    const dispatch = useDispatch()

    const searchCountry = async (e) => {
        e.preventDefault()
        let words = e.target.value.split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
        }
        e.target.value = words.join(' ');

        dispatch(filterCountries(e.target.value))
    }

    useEffect(async () => {
        const allCountries = await getAllInfo()
        dispatch(saveAllCountries(allCountries))
    }, [])

    return (
        <div>
            <SearchForm searchCountry={searchCountry} />
            <CardList />
        </div>
    )
}

export default Main