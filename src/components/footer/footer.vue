<template>
	<main>
			
		<ul class="fv">
			<li @click="aa" class="fvactive">			
				<router-link :to="{path:'/news',query:{tittle:'新闻'}}"><i class="iconfont icon-xinwen"></i>新闻</router-link>
			</li>
			<li>
				<router-link :to="{path:'/hot',query:{tittle:'热点'}}"><i class="iconfont icon-redian"></i>热点</router-link>
			</li>		
			<li>
				<router-link :to="{path:'/audio',query:{tittle:'视频'}}"><i class="iconfont icon-shipin"></i>视频</router-link>
			</li>
			<li>
				<router-link :to="{path:'/mine',query:{tittle:'个人中心'}}"><i class="iconfont icon-wode"></i>我的</router-link>
			</li>
		</ul>
		
	</main>
</template>

<script>
	export default{
		methods:{
			aa(){
				this.$router.push('/news/headline')
			}
		},
		mounted(){
			// if(!this.$route.query.tittle || this.$route.query.tittle=='新闻'){

			// }else{

			// }
			switch(this.$route.query.tittle){
				 case ("undefined"):
                        $('.fv li').eq(0).addClass('fvactive');
						$('.fv li').eq(0).siblings().removeClass('fvactive');
                        break;
                 case ("新闻"):
                        $('.fv li').eq(0).addClass('fvactive');
						$('.fv li').eq(0).siblings().removeClass('fvactive');
                        break;
                 case ("热点"):
                        $('.fv li').eq(1).addClass('fvactive');
						$('.fv li').eq(1).siblings().removeClass('fvactive');
                        break;
                 case ("视频"):
                        $('.fv li').eq(2).addClass('fvactive');
						$('.fv li').eq(2).siblings().removeClass('fvactive');
                        break;
                 case ("个人中心"):
                        $('.fv li').eq(3).addClass('fvactive');
						$('.fv li').eq(3).siblings().removeClass('fvactive');
                        break;
			};
			// console.log(this.$route.query.tittle);
			$('.fv li').click(function(event) {
				$(this).addClass('fvactive');
				$(this).siblings().removeClass('fvactive');
			});
			this.$http.jsonp("http://sinanews.sina.cn/interface/type_of_search.d.html?callback",{
				params:{
					keyword:this.msg
				},jsonp:"callback"
			}).then(function(res){
				console.log(res.body.data.feed1);
				this.list=res.body.data.feed1
			})
		}
	}
</script>

<style scoped="">
	
	body,html{
		width:100%;
		margin: 0;
		padding: 0;
	}
	
	.fv{
		width:100%;
		height: 50px;
		position: fixed;
		bottom:-1px;
		left:0;
		z-index: 10;
		padding-left: 0px;
		background: #fff;
 		box-shadow:0px -3px  2px 0px #eee; 
		border-top: 1px solid #ddd;
	}	
	.fv i{
		position: absolute;
		top: -5px;
		margin-left: 3px;
	}
	.fv>li{
		float:left;
		list-style: none;
		width:25%;
		height:50px;
		line-height: 50px;
		cursor: pointer;
	}
	.fv>li a{ 
		width: 100%;
		height: 50px;
		display: block;
		font-size: 12px;
		text-align: center;
		text-decoration: none;
		color: #666;
		margin-top: 5px;
		padding-top: 5px;
	}
	.fv .fvactive>a{
		color: #48b5fc;
	}

</style>