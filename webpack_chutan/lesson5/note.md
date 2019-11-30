### 打包知识点



打包过程中输出的信息都是什么



#### 输出信息



> Hash: 4fadd876cff070445543
> Version: webpack 4.41.2
> Time: 73ms
> Built at: 2019-11-30 11:40:24
>     Asset      Size  Chunks             Chunk Names
> bundle.js  1.29 KiB       0  [emitted]  main
> Entrypoint main = bundle.js
> [0] ./src/index.js + 3 modules 892 bytes {0} [built]
>     | ./src/index.js 268 bytes [built]
>     | ./src/header.js 204 bytes [built]
>     | ./src/content.js 210 bytes [built]
>     | ./src/sidebar.js 210 bytes [built]
>
> WARNING in configuration
> The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
> You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/





- Hash值  唯一Hash值
- Version webpack版本
- time 整体打包耗时
- bundle.js 打包文件  
- chunks  每一个打包文件对应的id 
- Chunk Names 每一个打包文件对应的名字



- The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
  - 警告没有指定模式 默认模式为Production（文件会被压缩）
  - 模式还可以指定为 development  代码不会被压缩