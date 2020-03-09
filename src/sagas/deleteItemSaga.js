import {put, takeEvery} from 'redux-saga/effects';
import deleteItem from '../fetchAPI/deleteItem';
import * as types from '../constant';
function* deleteItemSaga(action) {
    try{
    
        const res = yield deleteItem(action.payload);
        
        // yield put({
        //     type: types.DELETE_ITEM,
        //     //payload: res
        // })
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
export const delItem = [takeEvery(types.DELETE_ITEM, deleteItemSaga)];