### webpack配置文件

webpack.config.js

修改配置文件名 

```
npx --config webpackconfig.js //文件名自己定义
```



###  npm scripts

在package.json中修改scripts内容 进行命令简化

添加

```
 "bundle": "webpack" 
```

可以将打包命令

```
 npx webpack
```

 修改为

```
npm run bundle
```

当执行bundle时  底层调用webpack命令(先在工程目录找命令，再全局找)





### webpack-cli作用



使我们可以在命令行中使用webpack命令