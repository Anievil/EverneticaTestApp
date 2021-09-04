import ACTION from '../Actions/ActionType';

const initialState = {
    allCountries: null,
    filteredCountries: null
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SAVE_ALL_COUNTRIES: return {
            allCountries: action.payload,
            filteredCountries: state.filteredCountries
        };
        case ACTION.ANCHOR_NEW_COUNTRY: return {
            allCountries: state.allCountries.filter(el => el.name !== action.payload),
            filteredCountries: state.filteredCountries.filter(el => el.name !== action.payload.name)
        }
        case ACTION.DELETE_FROM_ALL_COUNTRY: return {
            filteredCountries: state.filteredCountries?.filter(el => el.name !== action.payload),
            allCountries: state.allCountries.filter(el => el.name !== action.payload)
        }
        case ACTION.DELETE_FROM_ANCHOR_COUNTRY: return {
            allCountries: [...state.allCountries, action.payload],
            filteredCountries: state.filteredCountries ? [...state.filteredCountries, action.payload] : null
        }
        case ACTION.FILTER_COUNTRIES: return {
            filteredCountries: action.payload !== '' ? state.allCountries?.filter(el => el.name.match(action.payload)) : null,
            allCountries: state.allCountries
        }

        default: return state;
    }
}

export default countryReducer