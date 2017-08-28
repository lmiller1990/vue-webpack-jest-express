import VueRouter from 'vue-router'
import Vue from 'vue'
import User from './User.vue'
import Home from './Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Home,
			children: [
				{
					name: 'user',
					path: '/:user',
					component: User
				}
			]
		}
	]
})

export default router
