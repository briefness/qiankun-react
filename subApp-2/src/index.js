/*
 * @Author: your name
 * @Date: 2021-01-12 10:42:07
 * @LastEditTime: 2021-01-29 14:35:07
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
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}
export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}
export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#sub-root-2') : document.querySelector('#sub-root-2'));
}