import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { coutnerSaga } from './counter';
import sample, { sampleSaga } from './sample';
import loading from './loading';

const rootReducer = combineReducers({
	counter,
	sample,
	loading,
});

export function* rootSaga() {
	// all 함수는 여러 사가를 합쳐 주는 역할을 합니다.
	yield all([coutnerSaga(), sampleSaga()]);
}

export default rootReducer;
