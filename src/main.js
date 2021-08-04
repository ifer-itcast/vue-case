import Vue from 'vue';
import App from './App.vue';
import Find from '@/views/Find';
import My from '@/views/My';
import Part from '@/views/Part';
import NotFound from '@/views/NotFound'

// !#1
import VueRouter from 'vue-router';

// !#2
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: '/',
    redirect: '/find'
  },
  {
    path: '/find',
    component: Find,
    name: 'Find'
  },
  {
    path: '/my',
    component: My,
    name: 'My'
  },
  {
    path: '/part',
    component: Part,
    name: 'Part'
  },
  {
    path: '/part/:username',
    component: Part
  },
  {
    path: '*',
    component: NotFound
  }
];
// !#3
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: (h) => h(App),
  // !#4
  router
}).$mount('#app');
