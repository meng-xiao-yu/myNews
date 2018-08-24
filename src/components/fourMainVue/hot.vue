<template>
	<main>
		<span>为您推荐了{{list.length}}条内容</span>
		<ul class="hotul">
			<li v-for="v in list">
				<h2>{{v.title}}</h2>
				<img :src="v.img"/>
				<ol>
					<li>{{v.ptime | time}}</li>
					<li>来源：{{v.source}}</li>
				</ol>
			</li>
			<li><p>已经到底了┓( ´∀` )┏</p></li>
		</ul>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.$http.get("./src/static/hot.json").then(function(res){
				this.list=res.body.recommend
			})
			$('span').fadeOut(1500);
		},
		filters:{
			time(n){
				n=n.split(' ');
				return n[0];
			}
		}
	}
</script>

<style scoped="">
	body,html{
		width:100%;
		
	}

	.hotul{
		width:100%;
		padding:0 20px;
		padding-bottom: 100px;
		box-sizing: border-box;
		padding-top:35px;
	}
	span{
		font-size: 13px;
		display: block;
		/* background: #ddd; */
		position: relative;
		top: 50px;
		left: 0px;
		text-align: center;
		border-radius:7px;
		color: #888;
	}
	.hotul>li{
		/* background: red; */
		margin-top:20px;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
		padding-bottom: 10px;
		overflow: hidden;
	}
	.hotul>li h2{
		font-size: 15px;
		padding-bottom: 15px;
		color: #333;
	}
	.hotul>li img{
		width:100%
	}
	.hotul>li ol{
		float: right;
	}
	.hotul>li ol>li{
		font-size: 13px;
		float: left;
		margin-left: 5px;
		color: #888;
	}
</style>