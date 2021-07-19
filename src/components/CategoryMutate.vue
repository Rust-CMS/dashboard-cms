<template>
    <form class="category-form" @submit="mutate">
		<v-text-field type="text" v-model="inner_category.title" />
		<v-btn type="submit">Save</v-btn>
	</form>
</template>

<script>
export default {
    props: {
        category: {
            required: true
        }
    },
    data() {
        return {
            inner_category: this.category
        }
    },
    methods: {
        mutate($evt) {
            $evt.preventDefault();
            this.$emit("value", this.inner_category)
        }
    }
};
</script>

<style lang="scss" scoped>
</style>