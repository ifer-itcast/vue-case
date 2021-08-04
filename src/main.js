import Vue from 'vue';
import App from './App.vue';
import Find from '@/views/Find';
import My from '@/views/My';
import NotFound from '@/views/NotFound';
import Ranking from '@/views/Ranking';
import Recommend from '@/views/Recommend';
import SongList from '@/views/SongList';

// !#1
import VueRouter from 'vue-router';

// !#2
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: '/find',
    component: Find,
    children: [
      {
        path: 'ranking',
        component: Ranking
      },
      {
        path: 'recommend',
        component: Recommend
      },
      {
        path: 'songlist',
        component: SongList
      }
    ]
  },
  {
    path: '/my',
    component: My
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
