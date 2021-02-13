import Vue from 'vue'
import App from './App.vue'
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
// sassのimport
require('@/assets/sass/app.scss')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')