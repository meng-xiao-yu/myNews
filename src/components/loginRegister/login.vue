<template>
	<div class="login">
		<i><img src="../../assets/images/back.png" height="25" width="25" alt="" @click="back"></i>
		<img src="../../assets/images/logo.jpg" height="190" width="190" alt="">
		<input type="text" placeholder="请输入账号" autofocus="autofocus">
		<input type="text" placeholder="请输入密码">
		<span>登录</span>
		<span><router-link :to="{path:'/register',query:{tittle:'注册'}}">注册</router-link></span>
		<input class="checkbox" type="checkbox" checked="checked" v-model="msg" @click="change">
		<p>已阅读并同意以下协议:<br><a href="#">《中国互联网守则》</a><a href="#">《隐私权条款》</a></p>
	</div>
</template>

<script>
	export default{
	    data () {
	      return {
	        msg:'true'
	      }
	    },
		methods:{
			back(){
				this.$router.push("/mine");
				this.$route.query.tittle = '个人中心';
			},
			show(){
				$('.box').fadeIn(500);
			},
			hide(){
				$('.box').fadeOut(500);
			},
			change(){
				if($('.checkbox').attr('checked')){
					$('.checkbox').removeAttr('checked');
					$('span').css('background','#bbb');
				}else{
					$('.checkbox').attr('checked','checked');
					$('span').css('background','#48b5fc');
				}
				
			}
		}
	}
</script>

<style scoped="">
	.login{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		display: block;
		position: fixed;
		top: 50px;
		left: 0px;
		z-index: 30;
		background: #fff;
	}
	.login i{
		position: fixed;
		top: -12px;
		left: 10px;
		z-index: 10;
	}
	.login i>img{
		height: 20px;
	}
	.login>img{
		width: 80px;
		height: 80px;
		display: block;
		position: absolute;
		top: 100px;
		left: 50%;
		margin-left: -40px;
		opacity: 0.8;
	}
	.login input{
		width: 70%;
		height: 30px;
		border: none;
		border-bottom: 1px solid #48b5fc;
		/* border-radius: 15px; */
		margin: 0px 15% 10px 15%;
		outline: none;
		padding-left:10px;
		font-size:13px;
	}
	.login span{
		width: 72%;
		height: 30px;
		background: #48b5fc;
		display: block;
		margin: 10px 15%;
		border-radius: 15px;
		font-size: 12px;
		line-height: 30px;
		text-align: center;
		color: #fff;
	}
	.login input:nth-of-type(1){
		margin-top: 200px;
	}

	.checktext{
		background: red;
		height: 30px;
	}
	.login .checkbox{
		height: 12px;
		width: 12px;
		position:relative;
		top:-27px;
		left:10px;
	}
	.login p{
		width: 65%;
		font-size:12px;
		position:relative;
		left:80px;
		top:-52px;
		color:#888;
	}
	.login p a{
		display: inline-block;
		text-decoration: none;
		margin-top: 3px;
		color: #555;
	} 
	span a{
		text-decoration: none;
		color: #fff;
	}
</style>