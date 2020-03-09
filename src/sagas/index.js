import {all} from 'redux-saga/effects';
import {ItemSaga} from './ItemSaga';
import {CreateData} from './CreateData';
import {delItem} from './deleteItemSaga';
import {updateSaga} from './updateSaga';
function* rootSaga() {
    yield all([
        ...ItemSaga,
        ...CreateData,
        ...delItem,
        ...updateSaga
    ]);

}
export default rootSaga;