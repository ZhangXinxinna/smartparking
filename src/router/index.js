// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import home from '../pages/HomePage.vue'
import login from '../pages/LoginPage.vue'
// const main = () => import("../pages/HomeMain.vue")
import main from '../pages/HomeMain.vue'
import HomeFourth from '../pages/HomeFourth.vue'
import HomeThird from '../pages/HomeThird.vue'
import HomeSecond from '../pages/HomeSecond.vue'
import register from '../pages/RegisterPage.vue'
import superadhome from '../pages/SuperAdpage.vue'
import supermap from '../pages/MapPage.vue'
import supertable from '../pages/SuperAdTable.vue'
import superodetable from '../pages/SuperAdorder.vue'

//创建并暴露一个路由器
export default new VueRouter({
	routes: [
		{
			path: '/',
			component: login,
		},
		{
			path: '/Home',
			component: home,
			children: [
				{
					path: '/Home',
					component: main
				},
				{
					path: '/HomeSecond',
					component: HomeSecond
				},
				{
					path: '/HomeThird',
					component: HomeThird
				},
				{
					path: '/HomeFourth',
					component: HomeFourth
				}
			]
		},
		{
			path: '/register',
			component: register
		}, {
			path: '/superhome',
			component: superadhome,
			children: [
				{
					path: '/superhome',
					component: main
				},
				{
					path: '/superhome/table',
					component: supertable
				},
				{
					path: '/superhome/map',
					component: supermap
				},{
					path: '/superhome/order',
					component: superodetable
				}
			]
		}
	]
})
