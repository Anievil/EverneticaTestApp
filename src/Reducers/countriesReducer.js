import ACTION from '../Actions/ActionType';

const initialState = {
    allCountries: null
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SAVE_ALL_COUNTRIES: return { allCountries: action.payload };
        case ACTION.ANCHOR_NEW_COUNTRY: return { allCountries: state.allCountries.filter(el => el.name !== action.payload.name)}
        case ACTION.DELETE_COUNTRY: return { allCountries: state.allCountries ? [...state.allCountries, action.payload] : null };

        default: return state;
    }
}

export default countryReducer