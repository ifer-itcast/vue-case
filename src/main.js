import Vue from 'vue';
import App from './App.vue';
import '@/mobile/flexible';
import '@/styles/reset.css';
import router from '@/router';
import { Tabbar, TabbarItem, NavBar } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
