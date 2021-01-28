/*
 * @Author: your name
 * @Date: 2021-01-12 10:42:07
 * @LastEditTime: 2021-01-28 16:28:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack-test/Users/mory/Desktop/qiankun-react/src/App.js
 */
import React, {useEffect} from 'react';
import { store } from '@ice/stark-data';
import './App.css';

function App(props) {

  const { content, loading } = props;
  
  useEffect(() => {
    store.set('name', 'Lucas');
  }, [])

  // 路由跳转
  function goto(title, href) {
    window.history.pushState({}, title, href);
  }
  
  return (
    <div className="App" style={{ display: 'flex' }}>
      <div style={{ width: 100 }}>
        <div>这里是 Menu </div>
        <button onClick={() => goto('react1', '/react1')}>react1</button>
        <button onClick={() => goto('react2', '/react2')}>react2</button>
      </div>
      <div style={{ flexGrow: 1 }}>
        <div>这里是 Header </div>
        {loading && <div className="mask">loading...</div>}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

export default App;
