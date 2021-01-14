import Vue from "vue"
import VueRouter from "vue-router"

import Login from '@/views/Login';
import Pages from '@/views/Pages';
import Page from '@/views/Page';

Vue.use(VueRouter)

const routes = [
	{
		path: "/login",
		component: Login
	},
	{
		path: "/pages/:id",
		component: Page
	},
	{
		path: "/pages",
		component: Pages
	},
	
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router
