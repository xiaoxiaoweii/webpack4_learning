作用规范团队编程标准



利用eslint规范



快速生成eslint配置文件



```
npx eslint --init
```

可以选择配置模式  配置文件种类等





在.eslint中更改配置

```
npx  eslint src  检测src中文件代码规范
```

[eslint](https://eslint.bootcss.com/)





> module.exports = {
>
>   "extends": "airbnb",
>
>   "parser": "babel-eslint",
>
>   "rules": {
>
> ​    "react/prefer-stateless-function": 0,
>
> ​    "react/jsx-filename-extension": 0
>
>   },
>
>   globals: {
>
> ​    document: false
>
>   }
>
> };

利用eslint-loader 对代码进行检测