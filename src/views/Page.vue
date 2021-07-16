<template>
    <main>
        <h1>Page {{ page.title }}</h1>
        <v-btn @click="create_field">+</v-btn>
        <v-card class="page-widget">
            <v-card-title>Fields</v-card-title>
            <v-card-text>
                <FieldTable :fields="pagemodule.fields.modules" />
            </v-card-text>
        </v-card>
        <v-card class="page-widget">
            <v-card-title>Categories</v-card-title>
            <v-card-text>
                <CategoryTable :fields="pagemodule.fields.categories" />
            </v-card-text>
        </v-card>
        <v-card class="page-widget">
            <v-card-title> Edit Page </v-card-title>
            <v-card-text>
                <form class="page-form" @submit="update_page">
                    <v-text-field type="text" v-model="page.page_name" />
                    <v-text-field type="text" v-model="page.page_url" />
                    <v-text-field type="text" v-model="page.page_title" />
                    <v-btn type="submit">Save</v-btn>
                </form>
            </v-card-text>
        </v-card>
    </main>
</template>

<script>
import { get, put } from "axios";
import FieldTable from "@/components/FieldTable";
import CategoryTable from "@/components/CategoryTable";

export default {
    name: "Page",
    data() {
        return {
            pagemodule: {},
            page: {},
        };
    },
    components: {
        FieldTable,
        CategoryTable,
    },
    async created() {
        let pagemodule = await this.get_page();
        this.pagemodule = pagemodule.message;

        let page = { ...pagemodule.message };
        delete page.fields;
        this.page = page;
    },
    methods: {
        async create_field() {
            console.error("Unimplemented");
        },
        async get_page() {
            let id = this.$route.params.id;
            let page_req = await get(`/pages/${id}/modules`);
            return page_req.data;
        },
        async update_page(e) {
            e.preventDefault();

            let id = this.$route.params.id;
            await put(`/pages/${id}`, this.page);
        },
    },
};
</script>

<style scoped>
.page-form {
    display: flex;
    flex-direction: column;
}

.page-widget {
    margin: 20px 0;
}
</style>