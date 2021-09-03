import React from 'react'
import styles from './SearchForm.module.css'
import { TextField, Button } from '@material-ui/core';

const SearchForm = ({ searchCountry }) => {
    const drop = (e) => {
        e.preventDefault();
        e.target.elements[0].value = ''
        searchCountry(e)
    }

    return (
        <form className={styles.searchForm} onSubmit={drop} onChange={searchCountry}>
            <TextField placeholder='Search here...' name='search' type='text' />
            <Button type='submit'>Drop</Button>
        </form>
    )
}

export default SearchForm