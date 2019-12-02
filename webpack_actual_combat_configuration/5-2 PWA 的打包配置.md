比较新的技术



http-server插件可以模拟服务器环境





pwa技术  即当服务器挂掉  本地有数据缓存仍然可以显示网页



使用workbox-webpack-pligin插件即可  只有要上线的代码需要进行pwa处理



即改动生产模式中的配置代码即可



> new WorkboxPlugin.GenerateSW({
>
> ​            clientsClaim: true,
>
> ​            skipWaiting: true
>
> ​        })



这只是简单应用  pwa配置起来还是很多的