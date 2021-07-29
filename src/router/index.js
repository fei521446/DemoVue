import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import AllopatryBirthDetail from '../views/AllopatryBirthDetail.vue'
import AllopatryBirthEdit from '../views/AllopatryBirthEdit.vue'
import AllopatryBirth from '../views/AllopatryBirth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect:{name:"AllopatryBirth"}
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/AllopatryBirth',
    name: 'AllopatryBirth',
    component: AllopatryBirth
  },{
    path: '/AllopatryBirth/add',
    name: 'AllopatryBirthEdit',
    component: AllopatryBirthEdit
  },{
    path: '/AllopatryBirth/:AllopatryBirthId',
    name: 'AllopatryBirthDetail',
    component: AllopatryBirthDetail
  },{
    path: '/AllopatryBirth/:AllopatryBirthId/edit',
    name: 'AllopatryBirthEdit',
    component: AllopatryBirthEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
