import Vue from 'vue';
import App from './App.vue';
import '@/mobile/flexible';
import '@/styles/reset.css';
import router from '@/router';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
