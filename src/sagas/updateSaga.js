import {put, takeEvery} from 'redux-saga/effects';
import updateItem from '../fetchAPI/updateItem';
import * as types from '../constant';
function* updateItems(action) {
    try{
        console.log("action.payload: " + action.payload);
        const res = yield updateItem(action.payload);
        yield put({
            type: types.UPDATE_ITEM_SUCESS,
            payload: res
        })
        yield put({
            type: types.GET_ITEM_REQUEST, 
            payload: res
        });
        console.log("end");
    } catch (error) {
        yield put({
            type: types.ADD_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
export const updateSaga = [takeEvery(types.UPDATE_ITEM_REQUEST, updateItems)];