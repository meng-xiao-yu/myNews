import VueRouter from "vue-router"
import news from '../components/fourMainVue/news.vue'
import hot from '../components/fourMainVue/hot.vue'
import audio from '../components/fourMainVue/audio.vue'
import mine from '../components/fourMainVue/mine.vue'
import headline from '../components/news/headline.vue'
import enterta from '../components/news/enterta.vue'
import fashion from '../components/news/fashion.vue'
import finance from '../components/news/finance.vue'
import health from '../components/news/health.vue'
import sport from '../components/news/sport.vue'
import more from '../components/news/more.vue'
import search from '../components/news/search.vue'
import login from '../components/loginRegister/login.vue'
import register from '../components/loginRegister/register.vue'

export default new VueRouter({
	routes:[
		{
			path:'/',
			component:news
		},
		{
			path:'/news',
			component:news,
			children:[
				{
					path:'/news/headline',
					component:headline
				},
				{
					path:'/news/enterta',
					component:enterta
				},
				{
					path:'/news/fashion',
					component:fashion
				},
				{
					path:'/news/finance',
					component:finance
				},
				{
					path:'/news/health',
					component:health
				},
				{
					path:'/news/sport',
					component:sport
				},
				{
					path:'/news/more',
					component:more
				}
				]
		},
		{
			path:'/search',
			component:search
		},
		{
			path:'/hot',
			component:hot
		},
		{
			path:'/audio',
			component:audio
		},
		{
			path:'/mine',
			component:mine
		},
		{
			path:'/login',
			component:login
		},
		{
			path:'/register',
			component:register
		}					
	]
})
