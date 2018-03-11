// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'reset-css/reset.css'
import App from './App'
import router from './router'

// Font Awesome Icons
import 'vue-awesome/icons/facebook-official'
import 'vue-awesome/icons/twitter-square'
import 'vue-awesome/icons/instagram'
import 'vue-awesome/icons/github'
import 'vue-awesome/icons/medium'
import 'vue-awesome/icons/wordpress'

import Icon from 'vue-awesome/components/Icon'

Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
