<template>
	<main>
		<h1>Field {{ field.title }}</h1>
		<field-mutate @mutate="update_field" :field="field" :pages="pages" />
	</main>
</template>

<script>
import { get } from "axios";
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
        async update_field($event) {
            $event.preventDefault();

            console.log($event);

            
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