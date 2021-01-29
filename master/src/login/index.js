/*
 * @Author: Lucas
 * @Date: 2021-01-12 10:42:07
 * @LastEditTime: 2021-01-29 15:11:12
 * @LastEditors: Please set LastEditors
 * @Description: 登录
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

function Login(props) {

  // 路由跳转
  function gotoIndex() {
    window.history.pushState({}, 'react1', '/react1');
  }


  const onFinish = (values) => {
    const userState = {
      ...values
    };
    store.set('userState', userState);
    gotoIndex();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      initialValues={{ username: 'admin', password: '123456', remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
