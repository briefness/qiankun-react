/*
 * @Author: Lucas
 * @Date: 2021-01-13 17:20:02
 * @LastEditTime: 2021-01-27 17:53:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /choerodon-front-agile/Users/mory/Desktop/qiankun-react/config/start.js
 */
/**
 *  auth: weilan
 *  读取文件夹并运行服务
 */

const fs = require('fs');
const path = require('path');
const util = require('util');

const startExec = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'Ex' : 'xdg-open');
/**
 * @description: 找到目录
 */
const sub_app_ath = path.resolve();

/**
 * @description: 正则获取子应用文件
 * 如果需要修改子应用文件名，则需同步修改正则匹配
 */
const sub_apps = fs.readdirSync(sub_app_ath).filter(i => /^subApp|master/.test(i));


console.log(`即将进入所有模块并启动服务：${JSON.stringify(sub_apps)} ing...`)

const exec = util.promisify(require('child_process').exec);
function start() {
  sub_apps.forEach(async i => {
    console.log(`${i} 执行 yarn serve，开始启动... 全部启动需要时间，请稍加等候，或刷新浏览器即可`)
    const { stdout, stderr } = await exec('yarn serve', { cwd: path.resolve(i) });
    console.log(i, 'success', stdout)
    console.error(i, 'error', stderr)
  });
  exec(`${startExec} http://localhost:6650/`);
};
start();

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
