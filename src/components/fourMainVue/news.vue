<template>
	<div class="m1">
		<nav>
			 <i class="iconfont icon-sousuo"></i>
			 <router-link :to="{path:'/search',query:{tittle:'搜索'}}"><input type="text" placeholder="热搜榜"></router-link>
			<ul>
				<li class="liactive"><router-link to='/news/headline'>头条</router-link></li>
				<li><router-link to='/news/finance'>财经</router-link></li>
				<li><router-link to='/news/fashion'>时尚</router-link></li>
				<li><router-link to='/news/health'>健康</router-link></li>
				<li><router-link to='/news/sport'>体育</router-link></li>
				<li><router-link to='/news/enterta'>娱乐</router-link></li>
				<li><router-link to='/news/more'>更多...</router-link></li>
			</ul>
		</nav>	
			<div class="m2">
				<router-view></router-view>
			</div>
		
	</div>

</template>

<script>

	export default{
	    data () {
	      return {
	        msg:''
	      }
	    },
	    mounted(){
			this.$router.push('/news/headline');
			$('ul li').click(function(event) {
				$(this).addClass('liactive');
				$(this).siblings().removeClass('liactive');
			});
		}
	}
</script>

<style scoped>
	.m1{
		width: 100%;
		margin-top: 20px;
    	overflow:hidden;
	}
	.m1 i{
		position:absolute;
		left:15px;
		top:56px;
		z-index:2;
		font-size:14px;
		color:#aaa;
	}
	.m2{
		width: 100%;
	}

	input{
		width: 30%;
		height: 20px;
		border-radius:28px;
		position:relative;
		top:14px;
		left:10px;
		background: #dfdfdf;
		border: 0px solid #000;
		padding-bottom: 4px; 
		box-sizing: border-box;
		display: inline-block;
	}
	input::-webkit-input-placeholder {
		font-size: 12px;
		color: #888;
		position:relative;
		bottom:9px;
		left:20px;
	}
	nav>ul{
		width: 65%;
		height: 20px;
		display: inline-block;
		position:relative;
		top:-24px;
		left:0px;
		margin:-36px 0 20px 33% ;
	}
	nav>ul li{
		float: left;
		margin-left: 7px;
		font-size: 13px;
		line-height: 20px;
	}
	.liactive{
		border-bottom: 2px solid #48b5fc;
	}
	nav>ul li a{
		color: #000;
		text-decoration: none;
	}

</style>