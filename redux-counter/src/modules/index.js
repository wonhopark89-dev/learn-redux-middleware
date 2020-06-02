import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { coutnerSaga } from './counter';

const rootReducer = combineReducers({
	counter,
});

export function* rootSaga() {
	// all 함수는 여러 사가를 합쳐 주는 역할을 합니다.
	yield all([coutnerSaga()]);
}

export default rootReducer;
