<template>
    <div>
        <v-dialog v-model="createFieldDialog" max-width="600px">
            <v-card>
                <v-card-title> Create Field </v-card-title>
                <v-card-text>
                    <FieldMutate
                        v-if="page"
                        @value="createField"
                        :currentPage="page.uuid"
                        :pages="pages"
                        :field="{}"
                        reset
                    />
                    <v-skeleton-loader v-else type="card"></v-skeleton-loader>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog v-model="createCategoryDialog" max-width="600px">
            <v-card>
                <v-card-title> Create Category </v-card-title>
                <v-card-text>
                    <CategoryMutate
                        v-if="page"
                        @value="createCategory"
                        :currentPage="page.uuid"
                        :pages="pages"
                        :category="{}"
                        reset
                    />
                    <v-skeleton-loader v-else type="card"></v-skeleton-loader>
                </v-card-text>
            </v-card>
        </v-dialog>

        <h1>Page {{ page.page_title }}</h1>
        <v-card class="page-widget">
            <v-card-title>Fields</v-card-title>
            <v-card-text>
                <div v-if="pagemodule">
                    <v-btn class="my-3" @click="createFieldDialog = true"
                        >+</v-btn
                    >
                    <FieldTable :fields="pagemodule.fields.modules" />
                </div>
                <v-skeleton-loader v-else type="card"></v-skeleton-loader>
            </v-card-text>
        </v-card>
        <v-card class="page-widget">
            <v-card-title>Categories</v-card-title>
            <v-card-text>
                <div v-if="pagemodule">
                    <v-btn class="my-3" @click="createCategoryDialog = true"
                        >+</v-btn
                    >
                    <CategoryTable :categories="pagemodule.fields.categories" />
                </div>
                <v-skeleton-loader v-else type="card"></v-skeleton-loader>
            </v-card-text>
        </v-card>
        <v-card class="page-widget">
            <v-card-title>Edit Page</v-card-title>
            <v-card-text>
                <PageMutate v-if="page" :page="page" @value="updatePage" />
                <v-skeleton-loader v-else type="card"></v-skeleton-loader>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { get, put, post } from "axios";
import FieldTable from "@/components/FieldTable";
import CategoryTable from "@/components/CategoryTable";
import FieldMutate from "@/components/FieldMutate.vue";
import CategoryMutate from "@/components/CategoryMutate.vue";
import PageMutate from '../components/PageMutate.vue';

export default {
    name: "Page",
    data() {
        return {
            pagemodule: false,
            page: false,
            pages: false,

            createFieldDialog: false,
            createCategoryDialog: false,
        };
    },
    components: {
        FieldTable,
        CategoryTable,
        FieldMutate,
        CategoryMutate,
        PageMutate
    },
    async created() {
        let pagemodule = await this.getPage();
        this.pagemodule = pagemodule;
        let page = { ...pagemodule };
        delete page.fields;
        this.page = page;

        let pages = await this.getPages();
        this.pages = pages;
    },
    methods: {
        async createCategory(category) {
            let res = await post(`/category`, category);

            res = {
                ...res.data,
                modules: []
            }

            this.pagemodule.fields.categories.push(res);
            
            this.createCategoryDialog = false;
        },
        async createField(field) {
            let res = await post(`/modules`, field);

            this.pagemodule.fields.modules.push(res.data);

            this.createFieldDialog = false;
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
        async updatePage(page) {
            this.page = page;
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