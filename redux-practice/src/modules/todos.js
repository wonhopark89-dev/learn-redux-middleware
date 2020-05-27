import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
// 액션 타입
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/헤제
const REMOVE = 'todos/REMOVE'; // todo 를 제거

// 액션 생성함수 ( 파라미터 포함 )
// export const changeInput = (input) => ({
// 	type: CHANGE_INPUT,
// 	input,
// });

// let id = 3; // 초기값
// export const insert = (text) => ({
// 	type: INSERT,
// 	todo: {
// 		id: id++,
// 		text,
// 		done: false,
// 	},
// });

// export const toggle = (id) => ({
// 	type: TOGGLE,
// 	id,
// });

// export const remove = (id) => ({
// 	type: REMOVE,
// 	id,
// });

// 액션생성함수 ( + createAction )
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
export const insert = createAction(INSERT, (text) => ({
	id: id++,
	text,
	done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id); // 파라미터를 그대로 반환할떄는 생략가능하지만, 파악하기 위해 넣어줌
export const remove = createAction(REMOVE, (id) => id);

// 초기값
const initialState = {
	input: '',
	todos: [
		{
			id: 1,
			text: '리덕스1',
			done: true,
		},
		{
			id: 2,
			text: '리덕스2',
			done: false,
		},
	],
};

// 리듀서 함수 ( 불변성 유지를 위한 spread 연산자 사용 )
// function todos(state = initialState, action) {
// 	switch (action.type) {
// 		case CHANGE_INPUT:
// 			return {
// 				...state,
// 				input: action.input,
// 			};
// 		case INSERT:
// 			return {
// 				...state,
// 				todos: state.todos.concat(action.todo),
// 			};
// 		case TOGGLE:
// 			return {
// 				...state,
// 				todos: state.todos.map((todo) =>
// 					todo.id === action.id ? { ...todo, done: !todo.done } : todo,
// 				),
// 			};
// 		case REMOVE:
// 			return {
// 				...state,
// 				todos: state.todos.filter((todo) => todo.id !== action.id),
// 			};
// 		default:
// 			return state;
// 	}
// }

// 액션생성 함수는 액션에 필요한 추가 데이터를 모두 payload 라는 이름으로 사용한다
const todos = handleActions(
	{
		[CHANGE_INPUT]: (state, { payload: input }) =>
			produce(state, (draft) => {
				draft.input = input;
			}),
		[INSERT]: (state, { payload: todo }) =>
			produce(state, (draft) => {
				draft.todos.push(todo);
			}),
		[TOGGLE]: (state, { payload: id }) =>
			produce(state, (draft) => {
				const todo = draft.todos.find((todo) => todo.id === id);
				todo.done = !todo.done;
			}),
		[REMOVE]: (state, { payload: id }) =>
			produce(state, (draft) => {
				const index = draft.todos.findIndex((todo) => todo.id === id);
				draft.todos.splice(index, 1);
			}),
	},
	initialState,
);

export default todos;
