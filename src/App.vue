<template>
		<main>
			<v-header></v-header>	
			<router-view></router-view>
  			<v-footer></v-footer>
		</main>
  		
</template>

<script>
	import vheader from './components/header/header.vue'
	import vfooter from './components/footer/footer.vue'

	
	export default {
		components:{
			'v-header':vheader,
			'v-footer':vfooter
		}
	}
</script>

<style>

</style>
