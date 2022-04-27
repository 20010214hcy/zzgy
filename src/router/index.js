import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/brief',
    name: 'brief',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BriefView')
  },
  {
    path:'/aptitude',
    name:'aptitude',
    component: ()=>import('../views/AptitudeView')
  },
  {
    path:'/product',
    name:'product',
    component: ()=>import('../views/ProductView')
  },
  {
    path: '/trends',
    name:'trends',
    component:()=>import('../views/TrendsView')
  },
  {
    path: '/invite',
    name:'invite',
    component: ()=>import('../views/InviteView')
  },
  {
    path: '/contact',
    name:'contact',
    component: ()=>import('../views/ContactView')
  },
  {
    path: '/group',
    name:'group',
    component: ()=>import('../views/GroupView')
  }
]

const router = new VueRouter({
  routes
})

export default router
