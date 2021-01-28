/*
 * @Author: your name
 * @Date: 2021-01-12 10:42:07
 * @LastEditTime: 2021-01-28 16:38:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack-test/Users/mory/Desktop/qiankun-react/children/react2/src/index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './public-path';
import App from './App';
function render(props) {
  const { container } = props;
  ReactDOM.render(<App {...props} />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

/**
 * @description: 独立运行：window.__POWERED_BY_QIANKUN__为false
  * 运行在qiankun: window.__POWERED_BY_QIANKUN__为true
 */
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap(props) {
  console.log('[react16] react app bootstraped');
}
export async function mount(props) {
  console.log('[react16] props from main framework11111');
  // storeTest(props);
  render(props);
}
export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}