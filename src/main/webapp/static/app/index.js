/**
 * Created by likaiqiang on 2016-09-22 16:38
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Router from 'react-router/lib/Router';

import {getHistory} from './utils/browserHistoryUtil';
import configureStore from './store/configureStore';

import reducer from './reducer';
//import {authInitAction} from './action/auth';

import routes from './routes';

const store = configureStore(reducer);
// 初始化 reducer 中的用户登录信息
// if (window._entryDataInit && window._entryDataInit.userInfo) {
//     store.dispatch(authInitAction(window._entryDataInit.userInfo));
// }

const history = getHistory(__ctx + '/entry');

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);

 
