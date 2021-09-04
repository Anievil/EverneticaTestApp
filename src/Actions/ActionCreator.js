import ACTION from './ActionType'

export const saveAllCountries = (data) => ({ type: ACTION.SAVE_ALL_COUNTRIES, payload: data })

export const anchorCountry = (data) => ({ type: ACTION.ANCHOR_NEW_COUNTRY, payload: data })

export const deleteFromAnchorCountry = (data) => ({ type: ACTION.DELETE_FROM_ANCHOR_COUNTRY, payload: data })

export const deleteFromAllCountry = (data) => ({ type: ACTION.DELETE_FROM_ALL_COUNTRY, payload: data })

export const filterCountries = (data) => ({ type: ACTION.FILTER_COUNTRIES, payload: data })
