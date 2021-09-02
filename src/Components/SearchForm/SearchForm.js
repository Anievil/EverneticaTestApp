import React from 'react'
import styles from './SearchForm.module.css'
import { TextField, Button } from '@material-ui/core';

const SearchForm = ({ searchCountry }) => {
    return (
        <form className={styles.searchForm} onChange={searchCountry}>
            <TextField placeholder='Search here...' name='search' type='text' />
            <Button>Search</Button>
        </form>
    )
}

export default SearchForm