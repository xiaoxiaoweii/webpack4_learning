创建简单的函数库

```
 `npm init -y`
```

  

安装webpack webpack-cli



```
npm install webpack webpack-cli --save
```



如果是业务代码正常打包工作就结束了  



当写函数库时 别人有很多的用法  各种引用方法



> output: {
>
> ​        path: path.resolve(__dirname, 'dist'),
>
> ​        filename: 'library.js',
>
> ​        library: 'root',  //支持src引用
>
> ​        libraryTarget: 'umd'  //任何方式都可以引用得到
>
> ​    }
>
> }



还需要做的事情 当在库里使用其他模块时 使用方法



当使用模块时  怎样打包可以将模块不打包进js文件



output中添加 

```
externals: '模块名',
```

打包过程中  遇到模块名  忽略即可 不过其他人使用时需要安装这个模块





在npm注册账号  可以将库发布到npm仓库中 





