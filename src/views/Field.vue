<template>
    <main>
        <h1>Field {{ field.title }}</h1>
        <form class="field-form" @submit="updateField">
            <input type="text" v-model="field.title" />
            <input type="text" v-model="field.content" />
            <select v-model="field.page_id">
                <option v-for="(page, i) in pages" :key="i" :value="page.id">{{page.page_name}}</option>
            </select>
            <button type="submit">Save</button>
        </form>
    </main>
</template>

<script>
import { get, put } from "axios";

export default {
    name: "Field",
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
        async getField() {
            let id = this.$route.params.id;
            return await get(`/modules/${id}`);
        },
        async getPages() {
            return await get(`/pages`);
        },
        async updateField(e) {
            e.preventDefault();

            let id = this.$route.params.id;
            return await put(`/modules/${id}`, this.field);
        }
    }
}
</script>

<style scoped>
.field-form {
    display: flex;
    flex-direction: column;
}
</style>