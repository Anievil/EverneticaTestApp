import ACTION from '../Actions/ActionType';

const initialState = {
    fixedCountries: [{name: 'uk', code: 'uk'}],
    allCountries: null,
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SAVE_ALL_COUNTRIES: return { allCountries: action.payload };
        // case ACTION.: return { data: state.data.filter(el => el.id !== action.payload.id)}

        default: return state;
    }
}

export default countryReducer