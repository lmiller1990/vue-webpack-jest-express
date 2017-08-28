import Vue from 'vue'
import {mount} from 'avoriaz'

import User from './User.vue'

test('should display the $route.user using a mocked route', () => {
	expect.assertions(1)

	const instance = Vue.extend()
	const $route = { params: { user: 'Lily' }} 

	const wrapper = mount(User, { 
		globals: { $route }, instance
	})
	wrapper.update()

	expect(wrapper.text().trim()).toBe('Lily')
})

