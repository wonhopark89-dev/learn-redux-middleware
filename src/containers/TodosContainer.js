import React, { useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';

// 컨테이너 컴포넌트에서 액션을 dispatch 할때 해당 Hook 사용가능
const TodosContainer = () => {
	const { input, todos } = useSelector(({ todos }) => ({
		input: todos.input,
		todos: todos.todos,
	}));

	const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
		[changeInput, insert, toggle, remove],
		[],
	);

	// useCallBack
	// const dispatch = useDispatch();
	// const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [
	// 	dispatch,
	// ]);
	// const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
	// const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
	// const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
	return (
		<Todos
			input={input}
			todos={todos}
			onChangeInput={onChangeInput}
			onInsert={onInsert}
			onToggle={onToggle}
			onRemove={onRemove}
		></Todos>
	);
};

// export default connect(
// 	// 비구조화 할당을 통해 todos 분리하여
// 	// state.todos.input 대신 todos.input 을 사용
// 	({ todos }) => ({
// 		input: todos.input,
// 		todos: todos.todos,
// 	}),
// 	{
// 		changeInput,
// 		insert,
// 		toggle,
// 		remove,
// 	},
// )(TodosContainer);

export default React.memo(TodosContainer);
