<template>
    <div>
        <v-dialog v-model="createDialog" max-width="600px">
            <v-card>
                <v-card-title>
                    Create Field
                </v-card-title>
                <v-card-text>
                    <FieldMutate @value="createField" :pages="pages" :field="{}" />
                </v-card-text>
            </v-card>
        </v-dialog>

        <h1>Page {{ page.title }}</h1>
        <v-card class="page-widget">
            <v-card-title>Fields</v-card-title>
            <v-card-text>
                <v-btn class="my-3" @click="createDialog = true">+</v-btn>
                <FieldTable :fields="pagemodule.fields.modules" />
            </v-card-text>
        </v-card>
        <v-card class="page-widget">
            <v-card-title>Categories</v-card-title>
            <v-card-text>
                <CategoryTable :categories="pagemodule.fields.categories" />
            </v-card-text>
        </v-card>
        <v-card class="page-widget">
            <v-card-title>Edit Page</v-card-title>
            <v-card-text>
                <form class="page-form" @submit="updatePage">
                    <v-text-field type="text" v-model="page.page_name" />
                    <v-text-field type="text" v-model="page.page_url" />
                    <v-text-field type="text" v-model="page.page_title" />
                    <v-btn type="submit">Save</v-btn>
                </form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { get, put, post } from "axios";
import FieldTable from "@/components/FieldTable";
import CategoryTable from "@/components/CategoryTable";
import FieldMutate from "../components/FieldMutate.vue";

export default {
    name: "Page",
    data() {
        return {
            pagemodule: {},
            page: {},

            pages: [],

            createDialog: false,
        };
    },
    components: {
        FieldTable,
        CategoryTable,
        FieldMutate,
    },
    async created() {
        let pagemodule = await this.getPage();
        this.pagemodule = pagemodule.message;
        let page = { ...pagemodule.message };
        delete page.fields;
        this.page = page;

        let pages = await this.getPages();
        this.pages = pages.message;
    },
    methods: {
        async createField(field) {
            this.pagemodule.fields.modules.push(field);

            let req_field = {
                ...field,
                module_type_id: 1,
            };
            await post(`/modules`, req_field);
            console.error("Unimplemented");
        },
        async getPage() {
            let id = this.$route.params.id;
            let page_req = await get(`/pages/${id}/modules`);
            return page_req.data;
        },
        async getPages() {
            let pages_req = await get(`/pages`);
            return pages_req.data;
        },
        async updatePage(e) {
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