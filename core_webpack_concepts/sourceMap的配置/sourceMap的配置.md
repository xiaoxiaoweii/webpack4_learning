demo在 webpack_chutan  lesson4 demo中



当mode为development时  soucemap默认打开



利用 

```
devtool: 'none'
```

关闭



关闭时 js文件拼写错误  仍能打包成功



soucemap 它是映射关系  会将dist文件出错的地方映射到没打包之前的位置  方便寻找错误

```
devtool: 'souce-map'
```

即可开启 souce-map

```
devtool: 'inline-souce-map'
```

将映射文件放入打包后的js文件中

```
devtool: 'cheap-inline-source-map'
```

```
devtool: 'eval'
```

生产环境没有source-map





常用



```
development devtool： ‘ cheap-modul-eval-source-map’
```

```
production devtool： ‘ cheap-modul-source-map’
```

