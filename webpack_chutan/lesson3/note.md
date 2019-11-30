### 安装nodejs

- [官方源](https://nodejs.org/download/release/v8.9.4/)  
- [阿里云镜像](https://npm.taobao.org/mirrors/node/v8.12.0/)
- [node安装](https://www.runoob.com/nodejs/nodejs-install-setup.html)

修改版本直接再url中指定版本号即可



尽量安装最新版本  可以利用最新特性提升打包速度



### 初始化npm项目

- npm init



###  安装webpack

#### 方法一 全局安装webpack

- 安装

```
cnpm install webpack webpack-cli -g
```



- 不推荐使用 多个项目会配置混乱
- 卸载 

```
cnpm uninstall webpack webpack-cli -g
```



#### 方法二 项目里安装webpack



- 安装 

```
cnpm install webpack webpack-cli --save-dev
```



- 查看版本



使用局部安装 

```
webpack-v
```

查看不了版本号 使用 

```
npx webpack -v
```

 查看版本号 npx命令帮助在项目文件夹中查找webpack

- 查看版本号是否存在

```
npm info webpack  
```

