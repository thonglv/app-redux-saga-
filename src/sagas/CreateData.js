import {put, takeEvery} from 'redux-saga/effects';
import createItem from '../fetchAPI/createItem';
// import updateItem from '../fetchAPI/updateItem';
import * as types from '../constant';
function* addItem(action) {
    try{
        console.log("action.payload: " + action.payload);
        const res = yield createItem(action.payload);
        yield put({
            type: types.ADD_ITEM_SUCESS,
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
export const CreateData = [takeEvery(types.ADD_ITEM_REQUEST, addItem)];