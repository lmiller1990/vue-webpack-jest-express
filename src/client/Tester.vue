<template>
  <div>
		Count: {{ count }}
		<button @click="clicked">Click me</button>
  </div>
</template>

<script>
  export default {
    name: 'Tester',
		data() {
			return {
				count: 0
			}
		},
		methods: {
			clicked() {
				this.count += 1
			}
		}
  }
</script>

<style scoped>
</style>
