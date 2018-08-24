<template>
		<main class="m3">
			<img src="../../assets/images/back.png" height="25" width="25" alt="" @click="back">
			<i class="iconfont icon-sousuo"></i>
			<input type="text" placeholder="热搜榜..." v-model="msg" @keyup="get">

				<ul class="title" v-if="msg != '热搜榜'">
					<li v-for="v in list">
						<i class="iconfont icon-sousuo"></i>
						<a :href="v.url">{{v.title}}</a>
					</li>
				</ul>

				<ul  class="searul" v-else>
					
						<li v-for="v in list">
							<a :href="v.url">
								<h2>{{v.title}}</h2>
								<img :src="v.image"/>
								<p>时间：{{v.time}}</p>
							</a>
						</li>
						<li style="font-size:14px;">已经到底了┐(‘～`；)┌ </li>
					
				</ul>

		</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:'热搜榜',
				list:[]
			}
		},
		mounted(){
			$('.m3 input').focus();
			this.$http.jsonp("http://sinanews.sina.cn/interface/type_of_search.d.html?callback",{
				params:{
					keyword:this.msg
				},jsonp:"callback"
			}).then(function(res){
				console.log(res.body.data.feed1);
				this.list=res.body.data.feed1
			})
		},
		methods:{
			back(){
				this.$router.push("/news/headline")
			},
			get(){
				this.$http.jsonp("http://sinanews.sina.cn/interface/type_of_search.d.html?callback",{
					params:{
						keyword:this.msg
					},jsonp:"callback"
				}).then(function(res){
					console.log(res.body);
					this.list=res.body.data.feed1
				})
			}
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
	main{
		width: 100%;
	}
	.m3>input{
		width: 90%;
		height: 24px;
		display: block;
		border-radius: 12px;
		margin-top:50px;
		padding-left: 6%;
		box-sizing: border-box;
		outline:n one;
		border: 0px;
		background: #dedfdf;
		position: relative;
		left: 5%;
		font-size: 13px;
		line-height: 24px;
		color: #555;
		outline:none;
	}
	.m3>input::-webkit-input-placeholder {
		color: #aaa;
		position:relative;
		bottom:0px;
		left:0;
	}
	.m3>i{
		position:absolute;
		left:7%;
		top:56px;
		z-index:2;
		font-size:14px;
		color:#aaa;
	}
	.m3>img{
		height: 20px;
		position: fixed;
		top: 10px;
		left: 10px;
		z-index: 10;
	}
	.title li{
		width: 55%;
		height: 23px;
		display: block;
		margin-left: 10%;
		line-height: 23px;
	}
	.title li>a{
		height: 23px;
		display: block;
		font-size: 12px;
		text-decoration: none;
		color: #555;
		position: relative;
		left: 15px;
		top: -29px;	
		overflow: hidden;
		text-overflow:ellipsis;
	}
	.title li>i{
		font-size: 14px;
		color:#aaa;
		position: relative;
		top: -5px;
	}

	.searul{
		padding:0px 20px;
	}
	.searul a{
		text-decoration: none;
		color: #333;
	}
	.searul li{
		overflow: hidden;
		padding:20px 0;
		border-bottom: 1px solid #ddd;
		box-sizing: border-box;
		font-size: 16px;
	}
	.searul li:nth-last-of-type(1){
		border:none;
		text-align: center;
	}
	.searul li img{
		display: block;
		width:100%;
		
	}
	.searul li h2{
		float:left;
		width:100%;
		overflow: hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
		padding:10px 0;
		box-sizing: border-box;
		font-size: 15px;
	}
	.searul li p{
		color:#999;
		font-size: 13px;
		padding-top:10px;
		text-align: right;
	}
</style>