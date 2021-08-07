import Vue from 'vue';
import App from './App.vue';
import '@/mobile/flexible';
import '@/styles/reset.css';
import router from '@/router';

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
