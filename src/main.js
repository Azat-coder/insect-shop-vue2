import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: "AIzaSyAducyQ9bSp7MiKbjuxwhu7HkKVQ-FCgGk",
  authDomain: "insect-shop-vue.firebaseapp.com",
  databaseURL: "https://insect-shop-vue.firebaseio.com",
  projectId: "insect-shop-vue",
  storageBucket: "insect-shop-vue.appspot.com",
  messagingSenderId: "849727103747",
  appId: "1:849727103747:web:e32ae113aa8e2b4cf97f36",
  measurementId: "G-XEDW073J8Y"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  } 
})




