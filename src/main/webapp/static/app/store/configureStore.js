/**
 * Created by likaiqiang on 2016-09-23 16:53
 */

import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {Iterable} from 'immutable';

const logger = createLogger({
    stateTransformer: (state) => {
        let newState = {};

        if (Iterable.isIterable(state)) {
            newState = state.toJS();
        } else {
            Object.keys(state).forEach(key => {
                const entry = state[key];

                if (Iterable.isIterable(entry)) {
                    newState[key] = entry.toJS();
                } else {
                    newState[key] = entry;
                }
            });
        }

        return newState;
    }
});

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

export default function configureStore(reducer, initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}