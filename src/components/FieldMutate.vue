<template>
	<form class="field-form" @submit="mutate">
		<v-text-field type="text" v-model="inner_field.title" />
		<v-text-field type="text" v-model="inner_field.content" />
		<v-select v-model="inner_field.page_id">
			<v-option v-for="(page, i) in inner_pages" :key="i" :value="page.id">
				{{ page.page_name }}
			</v-option>
		</v-select>
		<button type="submit">Save</button>
	</form>
</template>

<script>
import Vue from "vue";
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
            inner_field: Vue.util.extend({}, this.field),
            inner_pages: Vue.util.extend({}, this.pages)
        };
	},
	created() {
		console.log(this.field);
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