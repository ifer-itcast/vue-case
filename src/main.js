import $ from 'jquery';
$('#myUL>li:odd').css('color', 'red');
$('#myUL>li:even').css('color', 'green');

import './css/index.css';
import './less/index.less';

import imgObj from './assets/ll.gif';
const theImg = document.createElement('img');
theImg.src = imgObj;
document.body.appendChild(theImg);

import './assets/fonts/iconfont.css';
const theI = document.createElement('i');
theI.className = 'iconfont icon-qq';
document.body.appendChild(theI);

const fn = () => console.log('箭头函数');
consol.log(fn);
