import styled from 'styled-components'

const fitContent = 'fit-content', spaceAround = 'space-around' , flex = 'flex'

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
    display: ${flex};
    justify-content: ${spaceAround};
`
export const Icon = styled.h3`
    background-color: whitesmoke;
    border-radius: 20px;
    padding: 10px 15px;
    margin: 0;
    border: 1px gray solid;
    height: ${fitContent};
    margin: auto 0
`

//  SearchForm

export const Form = styled.form`
    margin: 20px auto;
    width: ${fitContent};
`

//  CardList

export const CountryCont = styled.div`
    display: ${flex};
    justify-content: ${spaceAround};
    flex-wrap: wrap;
    width: 90vw;
    margin: 0 auto;
    > * {
        margin-bottom: 30px;
        width: fit-content;
        padding: 15px;
        background-color: whitesmoke !important;
        position: relative !important;
        cursor: pointer;
    }
`

export const CloseButton = styled.div`
    position: absolute;
    margin: auto;
    right: 15px;
    top: 10px;
`