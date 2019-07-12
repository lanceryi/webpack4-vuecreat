import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/common.css'

new Vue({
  render: h => h(App)
}).$mount('#app')

if (module.hot) {
  module.hot.accept()
}