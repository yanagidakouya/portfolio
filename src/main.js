import Vue from 'vue'
import App from './App.vue'
// sassのimport
// require('@/assets/sass/app.scss')
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// vue-particles
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
// vue-typer
import VueTypePlugin from 'vue-typer'
Vue.use(VueTypePlugin)
// smoooth-scroll
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)
// wp読み込むためのaxios
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')