<template>
	<a :href="route.path">{{ route.path }}</a>
</template>

<script>
export default {
	name: "NavItem",
	props: {
		route: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
.navitem {
	background-color: gray;
}
</style>