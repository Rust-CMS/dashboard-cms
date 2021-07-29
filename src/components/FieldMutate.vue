<template>
    <form class="field-form" @submit="mutate">
        <v-text-field
            placeholder="Field Title"
            type="text"
            v-model="innerField.title"
        />
        <v-text-field
            placeholder="Field Content"
            type="text"
            v-model="innerField.content"
        />
        <v-select
            placeholder="Field Page"
            hint="Change what page this is displayed on."
            persistent-hint
            v-model="innerField.page_uuid"
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
import Vue from "vue";

export default {
    props: {
        pages: {
            type: Array,
            required: false,
        },
        field: {
            required: false,
        },
        currentPage: {
            required: false,
        },
        reset: Boolean,
    },
    data() {
        return {
            innerField: Vue.util.extend({}, this.field),
            innerPages: this.pages,
        };
    },
    created() {
		this.addPageUuid();
	},
    methods: {
        addPageUuid() {
            if (this.currentPage && !this.innerField.page_uuid) {
                this.innerField.page_uuid = this.currentPage;
            }
        },
        mutate($evt) {
            $evt.preventDefault();

            this.$emit("value", this.innerField);

            if (this.reset) {
                this.innerField = Vue.util.extend({}, this.field);
				this.addPageUuid();
            }
        },
    },
};
</script>
<style>
</style>