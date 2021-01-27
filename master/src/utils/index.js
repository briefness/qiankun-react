/*
 * @Author: Lucas
 * @Date: 2021-01-12 14:23:58
 * @LastEditTime: 2021-01-12 15:04:26
 * @LastEditors: Please set LastEditors
 * @Description: 工具库
 * @FilePath: /webpack-test/Users/mory/Desktop/qiankun-react/utils/index.js
 */

import { getMountedApps, navigateToUrl } from 'single-spa';

// 设置默认路由
export function setDefaultMountApp(defaultAppLink) {
  // can not use addEventListener once option for ie support
  window.addEventListener('single-spa:no-app-change', function listener() {
    var mountedApps = getMountedApps();

    if (!mountedApps.length) {
      navigateToUrl(defaultAppLink);
    }

    window.removeEventListener('single-spa:no-app-change', listener);
  });
}
