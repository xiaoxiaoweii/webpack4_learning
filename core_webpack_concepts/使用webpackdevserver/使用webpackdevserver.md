demo在 webpack_chutan  lesson4 demo中





改变源代码  dist目录自动打包

- [devServer](https://www.webpackjs.com/configuration/dev-server/)



### 三种方法



#### 1

package.json中scripts中



```
"watch": "webpack --watch"
```

利用watch监听  只要文件变换  便重新打包



#### 2

不仅自动打包  还可以自动打开浏览器



借助 webpack-dev-server 内置



在 webpack.config.js中添加



​	devServer: {

​    		contentBase: './dist',

​		open: true

​	},



package.json 中scripts中添加 "start": "webpack-dev-server"



npm run start  在localhost80端口可以查看网页内容



实现不但监听自动打包  自动刷新网页 自动打开网页 便于测试ajax请求  因为只有http开头的网页才可以发请求



3  自己搭建devserver  没看



