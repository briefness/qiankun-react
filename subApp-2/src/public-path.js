/*
 * @Author: your name
 * @Date: 2021-01-12 11:59:41
 * @LastEditTime: 2021-01-27 15:31:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack-test/Users/mory/Desktop/qiankun-react/children/react2/public-path.js
 */

// 这个注释的作用是告诉 ESLint 这个是一个全局变量
/* global __webpack_public_path__:writable */

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
