import Vue from 'vue';
import App from './App.vue';
import '@/mobile/flexible';
import '@/styles/reset.css';

new Vue({
  render: (h) => h(App)
}).$mount('#app');
