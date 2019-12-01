demo在 webpack_chutan  lesson4 demo中



异步操作中  分割组件  指定分割后js文件的名字 在引用异步加载模块中填写webpackChunkName注释即可 dynamic-import-webpack不是官方插件 不支持



在package.json 移除dynamic-import-webpack



使用官方支持动态引用的插件



- [plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/)
- [SplitChunksPlugin](https://www.webpackjs.com/plugins/split-chunks-plugin/) 同步异步都要使用的插件  设置控制js文件的分割





异步代码分割默认支持  同步需要再配置SplitChunksPlugin



```
splitChunks: {
    chunks: "async",
    minSize: 30000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    name: true,
    cacheGroups: {
        vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
        },
    default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
        }
    }
}
```