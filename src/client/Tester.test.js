import Vue from 'vue'
import Tester from './Tester.vue'

const doTest = (Component) => {
	const vm = new Vue({
		el: document.createElement('div'),
		render: h => h(Component)
	})

	vm.$el.querySelector('button').click()
	
	expect(vm.$children[0].count).toBe(1)
}

describe('Tester.vue', () => {
	it('should increment a counter when a button is clicked', () => {
		doTest(Tester)
	})
})
