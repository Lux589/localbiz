import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyCbOKISSNVSQqbry8-tV7R0drgBvcIWMOg',
//     libraries: 'places', // This is required if you use the Autocomplete plugin
//     // OR: libraries: 'places,drawing'
//     // OR: libraries: 'places,drawing,visualization'
//     // (as you require)
 
//     //// If you want to set the version, you can do so:
//     // v: '3.26',
//   },
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
