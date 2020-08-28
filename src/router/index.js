import Vue from 'vue'
import VueRouter from 'vue-router'
import HmLogin from '../views/Login.vue'
import Hmregister from '../views/Register.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: HmLogin },
  { path: '/register', component: Hmregister }
]

const router = new VueRouter({
  routes
})

export default router
