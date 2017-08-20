<template>
  <div>
		<div class="greeting">
			Hello Vue
		</div>
		<Tester />
  </div>
</template>

<script>
	import Tester from './Tester.vue'

  export default {
    name: 'App',
		components: {
			Tester
		}
  }
</script>

<style scoped>
</style>
