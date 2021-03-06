// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'normalize.css';
import './assets/styles/style.less';

import MsgboxPlugin from './plugins/Messagebox';

Vue.use(MsgboxPlugin);

Vue.config.productionTip = false;

/* tslint:disable no-unused-expression */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
