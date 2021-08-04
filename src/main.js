import Vue from 'vue';
import App from './App.vue';
import { Button, Form, Field } from 'vant';
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
new Vue({
  render: (h) => h(App)
}).$mount('#app');
