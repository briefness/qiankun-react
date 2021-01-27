/*
 * @Author: your name
 * @Date: 2021-01-13 17:20:02
 * @LastEditTime: 2021-01-27 14:33:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /choerodon-front-agile/Users/mory/Desktop/qiankun-react/config/install.js
 */
/**
 *  auth: weilan
 *  读取文件夹并运行下载依赖
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
/**
 * @description: 找到目录
 */
const sub_app_ath = path.resolve();

/**
 * @description: 正则获取子应用文件
 * 如果需要修改子应用文件名，则需同步修改正则匹配
 */
const sub_apps = fs.readdirSync(sub_app_ath).filter(i => /^subApp|master/.test(i));

console.log(`即将进入所有模块并下载依赖：${JSON.stringify(sub_apps)} ing... 批量下载所有项目依赖推荐使用 npm run yinit`)

const exec = util.promisify(require('child_process').exec);

// npm 源
let registry = `${process.argv[2]} install`;

function install() {
  sub_apps.forEach(async i => {
    console.log(`${i} 开始使用${registry}下载，耗时较久请耐心等待...`)
    const { stdout, stderr } = await exec(registry, { cwd: path.resolve(i) });
    console.log(i, 'success', stdout)
    console.error(i, 'error', stderr)
  });
};
install()

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
