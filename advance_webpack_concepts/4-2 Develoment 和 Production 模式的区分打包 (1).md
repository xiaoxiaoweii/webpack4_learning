demo在 webpack_chutan  lesson4 demo中



development和production



开发环境中 



- source-map十分完整  可以快速定位代码问题
- 打包代码不压缩





#### webpack配置

将webpack设置文件分为两个  分别为生产和开发



#### npm scripts 配置

```
"dev": "webpack-dev-server  --config webpack.dev.js"
```

使用webpack.dev.js进行配置运行webpack-dev-server

```
 "build": "webpack --config webpack.pro.js"
```

使用 webpack.pro.js"运行 webpack



因为生产模式下有服务器不用抵用dev-server



为解决两个设置文件中重复代码太多  可以将公用配置放在webpack.common.js



使用webpack-merge将不同配置合成一个