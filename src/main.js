// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'nprogress/nprogress.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'es6-promise/auto'
import Vue from 'vue'
import { Button, Input, Autocomplete, Row, Col } from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import * as filters from 'helpers/filter'

Vue.config.productionTip = false

const components = [
  Button,
  Input,
  Row,
  Col,
  Autocomplete
]

components.forEach((item) => Vue.component(item.name, item))
// register global utility filters.
let _filters = Object.assign(filters)
Object.keys(filters).forEach(key => {
  Vue.filter(key, _filters[key])
})

/* eslint-disable no-new */
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    store,
    template: '<App/>',
    components: { App }
  }).$mount('#app')
})
