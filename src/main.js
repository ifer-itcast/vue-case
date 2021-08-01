import $ from 'jquery';
$('#myUL>li:odd').css('color', 'red');
$('#myUL>li:even').css('color', 'green');

import './css/index.css';
import './less/index.less';

import imgObj from './assets/ll.gif';
const theImg = document.createElement('img');
theImg.src = imgObj;
document.body.appendChild(theImg);
