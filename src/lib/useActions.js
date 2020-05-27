import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

// 액션생성함수를 액션을 디스패치하는 함수로 변환해주는 Hook
/**
 * useActions 는 두가지 파라미터가 필요함, 
 * 첫번째 : 액션 생성 함수로 이루어진 배열
 * 두번째 : deps 배열 ( 이 배열안에 있는 원소가 바뀌면 액션을 디스패치 하는 함수를 새로 만들게됨)
 */

export default function useActions(actions, deps) {
	const dispatch = useDispatch();
	return useMemo(() => {
		if (Array.isArray(actions)) {
			return actions.map((a) => bindActionCreators(a, dispatch));
		}
		return bindActionCreators(actions, dispatch);
    },
         deps ? [dispatch, ...deps] : deps
    );
}

 