<template>
	<h1 v-if="!this.$route.query.tittle">{{msg}}</h1><!-- 默认值 -->
	<h1 v-else>{{this.$route.query.tittle}}</h1>
</template>

<script>
	export default{
	    data () {
	      return {
	        msg: '新闻'
	      }
	    }
	}
</script>

<style scoped="">
	body{
		width:100%;
		margin: 0px;
		padding: 0px;
	}
	h1{
		width: 100%;
		margin: 0px;
		padding:10px 0px 15px 0px;
		color: #fff;
		font-size: 15px;
		text-align: center;
		box-shadow:0px 3px  3px 1px #eef;
		background: #48b5fc;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 10;	
	}
	
</style>