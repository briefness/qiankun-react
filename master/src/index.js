/*
 * @Author: your name
 * @Date: 2021-01-12 10:42:07
 * @LastEditTime: 2021-01-28 16:29:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack-test/Users/mory/Desktop/qiankun-react/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { registerMicroApps, start } from 'qiankun';
import { setDefaultMountApp } from './utils';

function render({ appContent, loading }) {
  const container = document.getElementById('root');
  ReactDOM.render(<App loading={loading} content={appContent} />, container);
}

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}
/**
 * Step2 注册子应用
 * entry： 为微应用的访问地址
 */
registerMicroApps([
  {
    name: 'react1',
    entry: '//localhost:6651',
    render,
    activeRule: genActiveRule('/react1'),
  },
  {
    name: 'react2',
    entry: '//localhost:6652',
    render,
    activeRule: genActiveRule('/react2') 
  },
]);
/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/react1');

/**
 * Step4 启动应用
 */
start();


// serviceWorker.unregister();