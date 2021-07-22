<template>
    <form class="category-form" @submit="mutate">
        <v-text-field
            placeholder="Category Title"
            type="text"
            v-model="innerCategory.title"
        />
        <v-select
            placeholder="Category Page"
            hint="Change what page this is displayed on."
            persistent-hint
            v-model="innerCategory.page_uuid"
            :items="pages"
            item-text="page_title"
            item-value="uuid"
        >
        </v-select>
        <v-card-actions>
            <v-btn class="mt-5" type="submit">Save</v-btn>
        </v-card-actions>
    </form>
</template>

<script>
export default {
    props: {
        category: {
            required: true,
        },
        currentPage: {
            required: false,
            default: false,
        },
        pages: {
            required: false,
        },
    },
    data() {
        return {
            innerCategory: this.category,
        };
    },
    created() {
        if (this.currentPage && !this.category.uuid) {
            this.innerCategory.page_uuid = this.currentPage;
        }
    },
    methods: {
        mutate($evt) {
            $evt.preventDefault();
            this.$emit("value", this.innerCategory);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>