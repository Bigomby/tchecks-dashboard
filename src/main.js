import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify';
import Truncate from 'lodash.truncate';
import 'font-awesome/css/font-awesome.css';

import store from './store';
import App from './App';
import router from './router';
import './theme/default.styl';
import Auth from './plugins/auth';

Vue.config.productionTip = false;

Vue.filter('truncate', Truncate);

Vue.use(VeeValidate, { fieldsBagName: 'formFields' });
Vue.use(Vuetify, {
  theme: {
    primary: '#007A33',
    secondary: '#c9c478',
    accent: '#363b87',
  },
});

Auth({ store, router });

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />',
});
