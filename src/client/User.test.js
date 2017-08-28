import Vue from 'vue'
import {mount} from 'avoriaz'
import VueRouter from 'vue-router'

import User from './User.vue'

test('should display the $route.user using a a real router', () => {
	expect.assertions(1)

	Vue.use(VueRouter)

	const router = new VueRouter({
		routes: [
			{
				name: 'user',
				path: '/:user',
				component: User
			}
		]
	})

	router.push({ name: 'user', params: { user: 'lachlan' } })

	const wrapper = mount(User, { router })
	wrapper.update()

	expect(wrapper.text().trim()).toBe('lachlan')
})


