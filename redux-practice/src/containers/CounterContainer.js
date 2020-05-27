import React, { useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
	const number = useSelector((state) => state.counter.number);
	const dispatch = useDispatch();
	// useDispatch 를 사용할때는 useCallback 을 함께 사용하는 습관 ( 컴포넌트 성능 최적화 )
	const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
	const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

	return (
		<Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
	);
};

// const CounterContainer = ({ number, increase, decrease }) => {
// 	return (
// 		<Counter number={number} onIncrease={increase} onDecrease={decrease} />
// 	);
// };

const mapStateToProps = (state) => ({
	number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
	increase: () => {
		//console.log("increase");
		dispatch(increase());
	},
	decrease: () => {
		//console.log("decrease");
		dispatch(decrease());
	},
});

// mapStateToProps, mapDispatchProps 에서 반환되는 객체 내부의 값들은 컴포넌트의 props 로 전달
// mapStateToProps 는 state 를 파라미터로 받아옴
// mapDispatchToProps 는 store 의 내장함수 dispatch 를 파라미터로 받아옴

/**
 *  example 1
 */
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

/**
 * example 2
 */
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) =>
//     bindActionCreators(
//       {
//         increase,
//         decrease,
//       },
//       dispatch
//     )
// )(CounterContainer);

/**
 * example 3
 */
// export default connect(
// 	(state) => ({
// 		number: state.counter.number,
// 	}),
// 	{ increase, decrease }, // connect 함수가 내부적으로 bindActionCreaters 작업을 대신해줌
// )(CounterContainer);

/**
 * example 4
 */

export default CounterContainer;
