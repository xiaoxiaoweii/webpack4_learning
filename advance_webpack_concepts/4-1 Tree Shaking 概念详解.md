demo在 webpack_chutan  lesson4 demo中



在.babelrc使用了

```
useBuiltIns: 'usage'
```

后  js文件中不用引用

```
import "@babel/polyfill";
```

也可打包成功





js没有使用的模块也会被打包  使js文件变得很大



使用tree shaking解决问题 没有用到的模块不打包 只支持es module引用 因为底层为静态引用



使用



webpack.config.js文件下plugins中添加



> optimization: {
>
> ​        usedExports: true
>
> ​    },



package.json文件中 信息中添加



```
"sideEffects": false //防止没有导出任何内容的模块被忽略 false为都忽略
```

在开发模式下  打包仍会有未使用模块  但是在js中会标注出来



在生产模式下  打包会将未使用模块去掉  