/*
 * @Author: Lucas
 * @Date: 2021-01-29 14:56:23
 * @LastEditTime: 2021-01-29 15:08:57
 * @LastEditors: Please set LastEditors
 * @Description: 接口请求
 * @FilePath: /qiankun-react/master/src/service/index.js
 */

// 模拟调用获取用户信息接口
export function getUserInfo (userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        username: 'admin',
        password: '123456'
      })
    }, 500)
  })
}