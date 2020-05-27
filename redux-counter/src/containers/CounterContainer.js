import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
	return (
		<Counter number={number} onIncrease={increase} onDecrease={decrease} />
	);
};

//  첫번째, 두번째 파라미터가 CounterContainer 의 인자로 들어감
export default connect(
	(state) => ({
		number: state.counter,
	}),
	{
		increase,
		decrease,
	},
)(CounterContainer);
