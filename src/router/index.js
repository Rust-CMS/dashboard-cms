import Vue from "vue"
import VueRouter from "vue-router"

import Login from '@/views/Login';
import Pages from '@/views/Pages';
import Page from '@/views/Page';
import Field from '@/views/Field'

Vue.use(VueRouter)

const routes = [
	{
		path: "/login",
		name: "Login",
		component: Login
	},
	{
		path: "/pages/:id",
		name: "Page",
		component: Page
	},
	{
		path: "/pages",
		name: "Pages",
		component: Pages
	},
	{
		path: "/fields/:id",
		name: "Field",
		component: Field
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router
