<template>
	<main>
		<h1>Field {{ field.title }}</h1>
		<field-mutate v-if="Object.keys(pages).length > 0" @value="updateField" :field="field" :pages="pages" />
	</main>
</template>

<script>
import { get, put } from "axios";
import FieldMutate from '../components/FieldMutate.vue';

export default {
    name: "Field",
    components: {
        FieldMutate
    },
    data() {
        return {
            field: {},
            pages: []
        }
    },
    async created() {
        let field = await this.getField();
        this.field = field.data.message;

        let pages = await this.getPages();
        this.pages = pages.data.message;
    },
    methods: {
        async updateField(field) {
            this.field = field;
            let id = this.$route.params.id;
            return await put(`/modules/${id}`, field);
        },
        async getField() {
            let id = this.$route.params.id;
            return await get(`/modules/${id}`);
        },
        async getPages() {
            return await get(`/pages`);
        },
    }
}
</script>

<style scoped>
.field-form {
	display: flex;
	flex-direction: column;
}
</style>