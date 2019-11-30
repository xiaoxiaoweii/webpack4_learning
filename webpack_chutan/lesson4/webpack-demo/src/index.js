// Es Module 模块引入方式 引入报错  浏览器不认识  webpack中的模块可以解决这个问题
import Header from './header.js'
import Content from './content.js'
import Sidebar from './sidebar.js'
import avater from './picture.jpg'

new Header();
new Sidebar();
new Content();

