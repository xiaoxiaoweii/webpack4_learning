demo在 webpack_chutan  lesson4 demo中



code splitting  代码分割



理清代码分割和webpack之间的关系



修改上一节webpack配置目录变化引起的问题



- [clean-webpack-plugin only accepts an options object](https://blog.csdn.net/bianliuzhu/article/details/89553021)







两个问题 当js文件大  用户加载时间长，当数据改动重新加载，时间还是很长



配置多个js入口文件  分割代码  当页面业务逻辑发生变化时，只要加载变化的js文件即可



#### 利用code splitting实现代码分割

起初code splitting与webpack无关  后来由于webpack中有很多插件可以很容易的实现code splitting 所以很多时候将它与webpack绑定



利用webpack中插件自动实现代码分割



利用webpack4自带plitChunks实现



同步模块引入和异步模块引入



babel-plugin-dynamic-import-webpack 插件  使支持静态引用lodash





总结



代码风格和webpack无关



实现代码分割两种方式



1. 同步代码 只需要在webpack.common.js中做optimation的配置即可
2. 异步代码(import)  无需任何配置  自动进行代码分割