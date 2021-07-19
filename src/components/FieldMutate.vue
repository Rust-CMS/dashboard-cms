<template>
	<form class="field-form" @submit="mutate">
		<v-text-field placeholder="Field Title" type="text" v-model="innerField.title" />
		<v-text-field placeholder="Field Content" type="text" v-model="innerField.content" />
		<v-select placeholder="Field Page" v-model="innerField.page_id" :items="pages" item-text="page_title" item-value="id">
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
            innerField: this.field,
            innerPages: this.pages
        };
	},
	methods: {
		mutate($evt) {
			$evt.preventDefault();
			this.$emit("value", this.innerField);
		},
	},
};
</script>
<style>
</style>