<template>
    <div>
        <v-dialog v-model="fieldDialog" max-width="600px">
            <v-card>
                <v-card-title> Create Field </v-card-title>
                <v-card-text>
                    <FieldMutate
                        @value="createField"
                        :currentPage="category.page_uuid"
                        :pages="pages"
                        :field="{ category_uuid: category.uuid }"
                    />
                </v-card-text>
            </v-card>
        </v-dialog>

        <h1>Category {{ category.title }}</h1>

        <v-card class="fields">
            <v-card-title>Fields</v-card-title>
            <v-card-text>
                <div v-if="fields">
                    <v-btn class="mb-3" @click="fieldDialog = true">+</v-btn>
                    <FieldTable v-if="fields" :fields="fields" />
                </div>
                <v-progress-circular indeterminate color="primary" v-else />
            </v-card-text>
        </v-card>

        <v-card class="fields">
            <v-card-title>Edit Category</v-card-title>
            <v-card-text>
                <CategoryMutate
                    v-if="category"
                    :category="category"
                    :pages="pages"
                    @value="updateCategory"
                />

                <v-progress-circular indeterminate color="primary" v-else />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import FieldTable from "../components/FieldTable.vue";
import { get, put, post } from "axios";
import CategoryMutate from "../components/CategoryMutate.vue";
import FieldMutate from "@/components/FieldMutate.vue";
export default {
    components: {
        FieldTable,
        CategoryMutate,
        FieldMutate,
    },
    data() {
        return {
            fields: false,
            pages: false,
            category: false,

            fieldDialog: false,
        };
    },
    async created() {
        let category = await this.getCategory();
        let fields = await this.getFields();
        let pages = await this.getPages();

        this.category = category.data.message;
        this.fields = fields.data.message;
        this.pages = pages.data.message;
    },
    methods: {
        async createField(field) {
            let newModule = await post(`/modules`, field);

            this.fields.push(newModule.data.message);
        },
        async updateCategory(category) {
            this.category = category;
            let id = this.$route.params.id;
            return await put(`/category/${id}`, category);
        },
        async getFields() {
            let id = this.$route.params.id;
            return await get(`/modules/category/${id}`);
        },
        async getCategory() {
            let id = this.$route.params.id;
            return await get(`/category/${id}`);
        },
        async getPages() {
            return await get(`/pages`);
        },
    },
};
</script>

<style lang="scss" scoped>
.fields {
    margin: 20px 0;
}
</style>