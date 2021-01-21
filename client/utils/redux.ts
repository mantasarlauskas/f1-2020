import { shallowEqual, useSelector } from 'react-redux';

export function useShallowSelector<TState, TSelected = unknown>(selectorReturningObject: (state: TState) => TSelected) {
    return useSelector<TState, TSelected>(selectorReturningObject, shallowEqual);
}
