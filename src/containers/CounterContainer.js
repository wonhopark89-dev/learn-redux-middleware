import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
//export default CounterContainer;
