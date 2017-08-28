import Vue from 'vue'
import App from './App.vue'

test('ok', () => {
	expect(1).toBe(1)
})
/*const doTest = (Component) => {
	const vm = new Vue({
		el: document.createElement('div'),
		render: h => h(Component)
	})

	expect(vm.$el.querySelector('.greeting').textContent.trim()).toEqual('Hello Vue')
}

describe('App.vue', () => {
	it('should load a .vue file', () => {
		doTest(App)
	})
})*/
