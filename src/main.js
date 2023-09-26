import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router/index.js'
// import * as echarts from 'echarts'
import axios from 'axios'
// import XLSX from 'xlsx'
// import * as XLSX from 'xlsx/xlsx.mjs'
// import vueLive2d from 'vue-live2d'

// Vue.use(vueLive2d);
Vue.prototype.$axios = axios;
// Vue.prototype.$echarts = echarts;
// Vue.use(XLSX);
Vue.use(VueRouter);
// Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
