import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestSaga(type, request) {
	const SUCCESS = `${type}_SUCCESS`;
	const FAILURE = `${type}_FAILURE`;

	return function* (action) {
		yield put(startLoading(type)); // 로딩시작
		try {
			const response = yield call(request, action.payload);
			yield put({
				type: SUCCESS,
				payload: response.data,
			});
		} catch (err) {
			yield put({
				type: FAILURE,
				payload: err,
				error: true,
			});
		}
		yield put(finishLoading(type)); // 로딩 끝
	};
}
