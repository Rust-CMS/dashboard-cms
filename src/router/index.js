import Vue from "vue"
import VueRouter from "vue-router"

import Pages from '@/views/Pages';
import Page from '@/views/Page';
import Field from '@/views/Field'

Vue.use(VueRouter)

export const routes = [
	{
		path: "/pages/:id",
		name: "Page",
		component: Page,
		meta: {
			show: false
		}
	},
	{
		path: "/pages",
		name: "Pages",
		component: Pages,
		meta: {
			show: true
		}
	},
	{
		path: "/fields/:id",
		name: "Field",
		component: Field,
		meta: {
			show: false
		}
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router
