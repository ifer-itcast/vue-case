import Vue from 'vue';
import App from './components/App.vue';

const vm = new Vue({
  // 指定 vm 要控制的页面区域
  el: '#app',
  // 通过 render 函数，把指定的组件渲染到指定区域中
  render: h => h(App)
})