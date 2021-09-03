import ACTION from '../Actions/ActionType';

const initialState = {
    data: []
}

const anchoredReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ANCHOR_NEW_COUNTRY: return { data: [...state.data, action.payload] };
        case ACTION.DELETE_COUNTRY: return { data: state.data.filter(el => el.name !== action.payload.name)}

        default: return state;
    }
}

export default anchoredReducer