import { createAction, handleActions } from 'redux-actions';
/**
 * Ducks pattern
 * 한곳에 만든다 -> 액션 타입, 액션 생성함수, 리듀서 함수 => "모듈"
 */

// 액션타입
const INCREASE = 'counter/INCREASE'; // 보통네이밍을 "모듈이름/액션이름" 으로 한다
const DECREASE = 'counter/DECREASE';

// 액션생성 함수 (  + createAction 활용 )
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// createAction 을 활용하면 매번 객체를 만들어줄 필요없음
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기값
const initialState = {
	number: 0,
};

// 리듀서 함수, reducer function
// function counter(state = initialState, action) {
// 	switch (action.type) {
// 		case INCREASE:
// 			return {
// 				number: state.number + 1,
// 			};
// 		case DECREASE:
// 			return {
// 				number: state.number - 1,
// 			};
// 		default:
// 			return state;
// 	}
// }

// 리듀서 함수 ( + handleActions)

const counter = handleActions(
	{
		[INCREASE]: (state, action) => ({ number: state.number + 1 }),
		[DECREASE]: (state, action) => ({ number: state.number - 1 }),
	},
	initialState,
);

export default counter;
