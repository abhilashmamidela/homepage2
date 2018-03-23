import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import { store } from './store/index'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
  firebase.initializeApp({
    apiKey: 'AIzaSyDs-_RzcOymobOD7Pz30HXgTFDzSEPVLjA',
    authDomain: 'homepage2-7399b.firebaseapp.com',
    databaseURL: 'https://homepage2-7399b.firebaseio.com',
    projectId: 'homepage2-7399b',
    storageBucket: 'homepage2-7399b.appspot.com',

  })
  }
})
