import * as types from '../constant';
const DEFAULT_STATE = {
   // listItem: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
};
export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.ADD_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage

            }
        case types.ADD_ITEM_SUCESS:
            return {
                ...state,
                dataFetched: true,
                isFetching: false,
                error: false,
                errorMessage: null,
                //listItem: action.payload
            }
        case types.ADD_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        default:
            return state;
    }
}
