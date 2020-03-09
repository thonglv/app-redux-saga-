import * as types from '../constant';
export function getListItem(payload) {
    return ({
        type: types.GET_ITEM_REQUEST,
        payload
    })
}
export const addItem = (payload) => {
    return ({
        type: types.ADD_ITEM_REQUEST,
        payload
    })
}
export const deleteItem = payload => {
    return (
        {
            type: types.DELETE_ITEM,
            payload
        }
    )
}
export const updateItem = payload => {
    return (
        {
            type: types.UPDATE_ITEM_REQUEST,
            payload
        }
    )
}