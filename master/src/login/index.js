/*
 * @Author: Lucas
 * @Date: 2021-01-12 10:42:07
 * @LastEditTime: 2021-01-28 16:48:40
 * @LastEditors: Please set LastEditors
 * @Description: 登录
 * @FilePath: /webpack-test/Users/mory/Desktop/qiankun-react/src/App.js
 */
import React, {useEffect} from 'react';
import { store } from '@ice/stark-data';

function App(props) {

  // 路由跳转
  function goto(title, href) {
    window.history.pushState({}, 'react1', '/react1');
  }
  
  return (
    
  );
}

export default App;
