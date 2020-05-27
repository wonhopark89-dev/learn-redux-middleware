import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = 0; // 꼭 숫자일 필요는 없음

const counter = handleActions(
	{
		[INCREASE]: (state) => state + 1,
		[DECREASE]: (state) => state - 1,
	},
	initialState,
);

export default counter;
