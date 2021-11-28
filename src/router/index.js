import Vue from "vue"
import VueRouter from "vue-router"

import Pages from '@/views/Pages';
import Page from '@/views/Page';
import Field from '@/views/Field';
import Category from "@/views/Category";
import Login from "@/views/Login";

import { get } from "axios";

Vue.use(VueRouter)

export const routes = [
	{
		path: "/login",
		name: "Login",
		component: Login,
		meta: {
			show: false,
			protected: false
		}
	},
	{
		path: "/pages/:id",
		name: "Page",
		component: Page,
		meta: {
			show: false,
			protected: true
		}
	},
	{
		path: "/",
		name: "Pages",
		component: Pages,
		meta: {
			show: true,
			protected: true,
			icon: "mdi-book-open-page-variant"
		}
	},
	{
		path: "/fields/categories/:id",
		name: "Categories",
		component: Category,
		meta: {
			show: false,
			protected: true
		}
	},
	{
		path: "/fields/:id",
		name: "Field",
		component: Field,
		meta: {
			show: false,
			protected: true
		}
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

const loggedIn = async () => {
	let isLoggedIn = await get("/user");

	return isLoggedIn.status === 200;
}

/**
 * This is where we do the bulk of our authentication.
 * Protected routes are given by the "protected" metadata in the route.
 */
router.beforeEach((to, from, next) => {
	if (to.meta.protected) {
		if (loggedIn()) {
			next();
		} else {
			next("/login");
		}
	} else {
		next()
	}
})

export default router
