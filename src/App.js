import React from "react";
// import Counter from "./components/Counter";
import CounterContainer from "./containers/CounterContainer";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
