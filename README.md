<!--
 * @Author: Lucas
 * @Date: 2021-01-12 10:42:07
 * @LastEditTime: 2021-01-27 15:13:00
 * @LastEditors: Please set LastEditors
 * @Description: react 微前端
 * @FilePath: /webpack-test/Users/mory/Desktop/qiankun-react/README.md
-->

# react 微前端

## 描述

  基于 [qiankun](https://qiankun.umijs.org/zh) 的微前端项目，技术栈为react

## 运行

  推荐使用 yarn 

  ### 安装依赖

    npm run init // 使用 npm 安装所有应用的依赖

    npm run cinit // 使用 cnpm 安装所有应用的依赖

    npm run yinit // 使用 yarn 安装所有应用的依赖

  ### 运行

    npm run serve / yarn serve

  ### 打包

    npm run build / yarn build


## 添加新的子应用

  1. 在根目录创建应用名称，以 subApp 开头的文件名

  2. 导出相应的生命周期钩子

  3. 配置微应用的打包工具

  4. 在主应用里注册