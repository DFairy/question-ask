import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'common/scss/common.scss'
import 'common/js/rem.js'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')