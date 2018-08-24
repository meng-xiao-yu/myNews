<template>
	<ul class="headlineul">
		<li v-for="v in list">
			<a :href="v.link">
			<div>
				<h2>{{v.title}}[来源：{{v.source}}]</h2>

				<ol>
					<li>{{v.tcount}}人浏览</li>
					<li>{{v.ptime | time}}</li>				
				</ol>
			</div>
			<img :src="v.picInfo[0].url" alt="" />
			</a>
		</li>
		<li><p>已经到底了┓( ´∀` )┏</p></li>
	</ul>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			$(".m1>ul li").click(function(){
				console.log(111);
				$(this).addClass('liactive');
				$(this).siblings().removeClass('liactive');
			});
			this.$http.jsonp("http://3g.163.com/touch/jsonp/sy/recommend/0-50.html",{
				params:{					
				},jsonp:'callback'
			}).then(function(res){
				this.list=res.body.news
			})
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
	body,html,main{
		width:100%;
	}
	.banner{
		width:100%;
		height: 0;
		padding-bottom: 67%;
		overflow: hidden;
		position: relative;
	}
	.banner>ul{
		width:400%;
		overflow: hidden;
		position: absolute;
		left:0;
		top:0;
	}
	.banner>ul>li{
		width:25%;
		float:left;
	}
	.banner>ul>li img{
		display: block;
		width:100%;
	}
	.banner>ol{
		overflow: hidden;
		position: absolute;
		bottom: 5px;
		left:50%;
		transform: translateX(-50%);
	}
	.banner>ol>li{
		float:left;
		width:10px;
		height:10px;
		border:1px solid #fff;
		box-sizing: border-box;
		border-radius: 50%;
		margin-left: 10px;
	}
	.banner>ol>.lbg{
		background: rgba(255,255,255,.8);
	}
	
</style>