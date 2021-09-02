import axios from 'axios'

export const getInfo = async (countryName) => {
    const { data } = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .catch(() => 'err')
    return data
}