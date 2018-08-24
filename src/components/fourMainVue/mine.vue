<template>
	<div class="mine">
		<ul>
			<li><ol><li><i class="iconfont icon-wode" style="color:skyblue"></i><p>我的资料</p></li></ol></li>
			<li>
				<ol>
					<li><i class="iconfont icon-htmal5icon24" style="color:orange"></i><p>我的收藏</p></li>
					<li><i class="iconfont icon-yaoqing" style="color:red"></i><p>邀请好友</p></li>
				</ol>
			</li>			
			<li>
				<ol>
					<li><i class="iconfont icon-yijianfankui01" style="color:#8f8"></i><p>意见反馈</p></li>		
					<li><i class="iconfont icon-moban" style="color:orange"></i><p>关于我们</p></li>
					<li><i class="iconfont icon-qingchuhuancun" style="color:green"></i><p>清除缓存</p></li>
					<li><i class="iconfont icon-yinsi" style="color:red"></i><p>我的设置</p></li>
				</ol>
			</li>
			<li>
				<ol>
					<li  class="logout" @click="show"> 
							<p>注销用户</p>
					</li>
				</ol>
			</li>
		</ul>
		<div class="box">
			<span>
				<h6>确定要注销当前用户吗？</h6>
				<p class="cancel" @click="hide">取消</p>
				<p class="next"><router-link :to="{path:'/login',query:{tittle:'登录'}}">确定</router-link></p>
			</span>
		</div>
	</div>
	

</template>

<script>
	export default{
	    data () {
	      return {
	        msg:'我的'
	      }
	    },
		methods:{
			aa(){
				this.$router.push('/news')
			},
			show(){
				$('.box').fadeIn(500);
			},
			hide(){
				$('.box').fadeOut(500);
			}
		}
	}
</script>

<style scoped="">
	.mine{
		margin-top: 50px;
		height: 550px;
		background: #eee;
	}
	.mine ul>li{					
		margin-top: 10px;
		background: #fff;
	}
	.mine ol li{
		height: 45px;
		border-bottom: 1px solid #eee;
		margin-left: 20px;
	}
	.mine ol i{
		position: relative;
		top: -15px;		
	}
	.mine ol p{
		display: inline-block;
		font-size: 14px;
		position: relative;
		top: -15px;
		left: 5px;
	}
	.mine span{
		width: 100%;
		height: 40px;
		display: block;
		font-size: 15px;
		line-height: 40px;
		background: #fff;
		text-align: center;
	}
	.mine ol .logout{
		text-align: center;
		margin-left: 0px;
		background: #eee;
	}
	.logout p{
		width: 80%;
		height: 30px;
		display: block;
		color: #fff;
		margin-left: -10px;
		line-height: 30px;
		background: #c40909;
		border-radius: 5px;
		opacity: 0.8;
	}
	.box{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		z-index: 20;
		background: rgba(0, 0, 0, 0.4);
		display: none;
	}
	.box span{
		float: left;
		width: 84%;
		height: 180px;
		margin: 56% 8%;
		border-radius: 5px;
	}
	.box span h6{
		height: 140px;
		line-height: 120px;	
		border-bottom: 1px solid #ddd;
	}
	.cancel,.next{
		width: 50%;
		height: 39px;
		font-size: 13px;
		float: left;
		color: #555;
	}
	.cancel{
		margin-left: -1px;
		border-right: 1px solid #ddd;
	}
	.box span a{
		text-decoration: none;
	}
</style>