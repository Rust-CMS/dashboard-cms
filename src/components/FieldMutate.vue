<template>
	<form class="field-form" @submit="mutate">
		<v-text-field type="text" v-model="inner_field.title" />
		<v-text-field type="text" v-model="inner_field.content" />
		<v-select v-model="inner_field.page_id" :items="pages" item-text="page_title" item-value="id">
		</v-select>
		<v-btn type="submit">Save</v-btn>
	</form>
</template>

<script>
export default {
    props: {
        pages: {
            type: Array,
            required: false,
        },
        field: {
            required: false,
        }
    },
	data() {
		return {
            inner_field: this.field,
            inner_pages: this.pages
        };
	},
	methods: {
		mutate($evt) {
			$evt.preventDefault();
			this.$emit("value", this.inner_field);
		},
	},
};
</script>
<style>
</style>