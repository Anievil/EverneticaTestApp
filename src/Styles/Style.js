import styled from 'styled-components'

const fit_content = 'fit-content'

// Country Page

export const Page = styled.div`
    width: 20vw;
    margin: 30px auto;
    text-align: center;
`
export const Flag = styled.img`
    width: 200px;
    height: 100px;
`
export const CountryName = styled.div`
    display: flex;
    justify-content: space-around;
`
export const Icon = styled.h3`
    background-color: whitesmoke;
    border-radius: 20px;
    padding: 10px 15px;
    margin: 0;
    border: 1px gray solid;
    height: ${fit_content};
    margin: auto 0
`

//  SearchForm

export const Form = styled.form`
    margin: 20px auto;
    width: ${fit_content};
`