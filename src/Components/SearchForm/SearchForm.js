import React from 'react'
import styles from './SearchForm.module.css'
import { TextField, Button } from '@material-ui/core';

const SearchForm = ({ searchCountry }) => {
    const drop = (e) => {
        e.preventDefault();
        e.target.elements[0].value = ''
        e.target.value = ''
        searchCountry(e)
    }

    return (
        <form className={styles.searchForm} onSubmit={drop} onChange={searchCountry} autoComplete='off'>
            <TextField placeholder='Search here...' name='search' type='text' autoFocus  />
            <Button type='submit'>Drop</Button>
        </form>
    )
}

export default SearchForm