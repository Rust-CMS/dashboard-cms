<template>
	<div id="app">
		<Nav />
		<section class="route-container">
			<router-view />
		</section>
	</div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
	name: "App",
	components: {
		Nav,
	},
};
</script>

<style>
#app {
	display: flex;
}

.route-container {
	flex: 1;
}
</style>
