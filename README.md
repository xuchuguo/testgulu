# 轱辘 - 一个 Vue UI 组件
[![Build Status](https://travis-ci.com/xuchuguo/testgulu.svg?branch=master)](https://travis-ci.com/xuchuguo/testgulu)


这个是一个好用的 UI 框架，提供了一些常用组件，适合 PC 端和移动端使用。

组件：按钮、输入框、网格、布局、Popover

## 介绍

gulu 就是轮子，这是我在学习 Vue 的过程中尝试写的一个 UI 框架（造的轮子），希望对你有用。

## 开始使用

1. 添加 CSS 样式
    使用本框架前，请在 CSS 中开启 border-box
    ```
    *，*::before,*::after{ box-sizing: border-box }
    ```
    IE 8 及以上浏览器支持此样式。

2. 安装 gulu-xcg

    ```
    npm install gulu-xcg
    ```
    或者
    ```
    yarn add gulu-xcg
    ```
3. 引入 gulu-xcg
    ```
    import { Button } from 'gulu-xcg'
    import 'gulu-xcg/dist/index.css'

    export default {
        name: 'app',
        components: {
            'x-button': Button
        }
    }

## 文档

[官方文档](https://xuchuguo.github.io/testgulu/)

## 提问

[Issues](https://github.com/xuchuguo/testgulu/issues)

## 联系方式

邮箱：xuchuguo@qq.com

