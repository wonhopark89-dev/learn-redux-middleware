// 루트 리듀서
// 스토어를 만들때는 리듀서를 하나만 사용해야 하니, 기존에 리듀서들을 하나로 합쳐줘야함

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
	counter,
	todos,
});

export default rootReducer;
// 파일이름을 index.js 로 해놔서 import 하는 곳에서 디렉터리 이름까지만 호출해도됨
