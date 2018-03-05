import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import store from './store.js'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'


import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)
/* eslint-disable no-new */
const router = new VueRouter({

// Pointing routes to the components they should use
routes:[
 { path:'/home',
    component: Home
  },
   {path:'/time-entries',
    component: TimeEntries,
    children:[
       { path:'log-time',
        component: LogTime}
    ]
  }]
})
/* eslint-disable no-new */

// Any invalid route will redirect to home
/*router.redirect({
  '*': '/home'
})*/

var bus = new Vue({});

/* eslint-disable no-new */
const app = new Vue({
	router,
	data: {
		bus: bus
	},
	render: h => h(App)
}).$mount('#app')