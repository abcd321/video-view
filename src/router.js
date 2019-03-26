import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
			redirect:() => {
				return '/video/videoList'
				}
    },
    {
      path: '/video',
			name:'video',
			component: Home,
			children:[{
				path:'videoList',
				name:'videoList',
				component: () => import(/* webpackChunkName: "video" */
				'@/components/VideoList.vue')
			},{
				path:'videoDetail',
				name:'videoDetail',
				component:() => import(/* webpackChunkName: "video" */
				'@/components/VideoDetail.vue')
			},{
				path:'category',
				name:'category',
				component: () => import(/* webpackChunkName: "video" */
				'@/components/Category.vue')
			},{
				path:'aboutUs',
				name:'aboutUs',
				component: () => import(/* webpackChunkName: "video" */
				'@/components/AboutUs.vue')
			}]
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    }
  ]
})
