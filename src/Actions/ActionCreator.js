import ACTION from './ActionType'

export const saveAllCountries = (data) => ({ type: ACTION.SAVE_ALL_COUNTRIES, payload: data })

export const anchorCountry = (data) => ({ type: ACTION.ANCHOR_NEW_COUNTRY, payload: data })

export const deleteCountry = (data) => ({ type: ACTION.DELETE_COUNTRY, payload: data })
