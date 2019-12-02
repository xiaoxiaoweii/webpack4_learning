经常用到的配置





使用模块axios发送ajax请求



开发环境请求接口和线上环境接口一般是不一致的  为解决这个问题  采用请求转发、





详细的在webpack官方文档找

不支持对根目录转发

> proxy: {
>
> ​            '/react/api': {
>
> ​                target: 'https://www.dell-lee.com',
>
> ​                secure: false,
>
> ​                pathRewrite: {
>
> ​                    'header.json': 'demo.json'
>
> ​                },
>
> ​                changeOrigin: true,
>
> ​                headers: {
>
> ​                    host: 'www.dell-lee.com',
>
> ​                }
>
> ​            }
>
> ​        }



只能在devServer环境中生效 线上没有所以不会生效

将请求转发  改变weback配置内容要重启终端





> devServer: {
>
> ​        contentBase: './dist',
>
> ​        open: true,
>
> ​        port: 8080,
>
> ​        hot: true,
>
> ​        hotOnly: true,
>
> ​        proxy: {
>
> ​            '/react/api': {
>
> ​                target: 'https://www.dell-lee.com',
>
> ​                secure: false, //对https的网址请求转发
>
> ​                pathRewrite: {
>
> ​                    'header.json': 'demo.json'
>
> ​                },
>
> ​                changeOrigin: true,
>
> ​                headers: {
>
> ​                    host: 'www.dell-lee.com',
>
> ​                }
>
> ​            }
>
> ​        }
>
> ​    }