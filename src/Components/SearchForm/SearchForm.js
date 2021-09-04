import React from 'react'
import { TextField, Button } from '@material-ui/core';
import { Form } from '../../Styles/Style'

const SearchForm = ({ searchCountry }) => {
    const drop = (e) => {
        e.preventDefault();
        e.target.elements[0].value = ''
        e.target.value = ''
        searchCountry(e)
    }

    return (
        <Form onSubmit={drop} onChange={searchCountry} autoComplete='off'>
            <TextField placeholder='Search here...' name='search' type='text' autoFocus />
            <Button type='submit'>Drop</Button>
        </Form>
    )
}



export default SearchForm