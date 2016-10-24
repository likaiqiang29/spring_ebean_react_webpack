/**
 * Created by likaiqiang on 2016-09-23 16:57
 */

import hashHistory from 'react-router/lib/hashHistory';
import useRouterHistory from 'react-router/lib/useRouterHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {supportsHistory} from 'history/lib/DOMUtils';

/**
 * react-router hash 和 html5 两种路由切换方式, 不过后者不支持 ie9 及以下版本,
 * 在次情况下, 路由切换的时候会刷新整个页面, 这种兼容方式不是我们需要的, 所以这儿
 * 提供此方法用于检测支持情况, 支持的话使用后者方式, 否则降级到 hash 模式.
 *
 * @param basename 路由相对的根路径
 * @returns {*}
 */
export function getHistory(basename) {
    let history = hashHistory;

    // 检测是否支持 html5 的路由模式
    if (supportsHistory()) {
        history = useRouterHistory(createBrowserHistory)({
            basename
        });
    }

    return history;
}