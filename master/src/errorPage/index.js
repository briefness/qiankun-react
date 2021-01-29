/*
 * @Author: Lucas
 * @Date: 2021-01-12 10:42:07
 * @LastEditTime: 2021-01-29 15:18:29
 * @LastEditors: Please set LastEditors
 * @Description: 404 页面
 * @FilePath: /webpack-test/Users/mory/Desktop/qiankun-react/src/App.js
 */
import React, {useEffect} from 'react';
import { store } from '@ice/stark-data';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function ErrorPage(props) {

  return (
    <div>
      <div>页面飞走了</div>
      <h1>404</h1>
    </div>
  );
}

export default ErrorPage;
