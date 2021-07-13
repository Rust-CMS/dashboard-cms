<template>
	<form class="field-form" @submit="mutate">
		<input type="text" v-model="inner_field.title" />
		<input type="text" v-model="inner_field.content" />
		<select v-model="inner_field.page_id">
			<option v-for="(page, i) in inner_pages" :key="i" :value="page.id">
				{{ page.page_name }}
			</option>
		</select>
		<button type="submit">Save</button>
	</form>
</template>
<script>
export default {
    props: {
        pages: {
            type: Array,
            required: false,
            default: () => []
        },
        field: {
            required: false,
            default: () => []
        }
    },
	data() {
		return {
            inner_field: this.field,
            inner_pages: this.pages
        };
	},
    created() {
        console.log(this.inner_field);
    },
	methods: {
		mutate($evt) {
			this.$emit("value", $evt);
		},
	},
};
</script>
<style>
</style>