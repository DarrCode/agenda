import Vue from 'vue'
import App from './App.vue'

import Vodal from 'vodal';

Vue.component(Vodal.name, Vodal);


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// include animation styles
import "vodal/common.css";
import "vodal/rotate.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
