<template>
	<aside class="nav">
		<NavItem v-for="(route, i) in routes" :key="i" :route="route" />
	</aside>
</template>

<script>
import NavItem from "@/components/NavItem";

export default {
	name: "Nav",
	data() {
		return {
			routes: [],
		};
	},
	components: {
		NavItem,
    },
    created() {
        this.get_all_routes();
    },
	methods: {
		get_all_routes() {
			this.routes = this.$router.options.routes;
		},
	},
};
</script>

<style scoped>
.nav {
    display: flex;
    flex-direction: column;
	flex: 0.2;
}
</style>